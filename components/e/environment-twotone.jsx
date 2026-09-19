import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9jb7t68i.css';
import '../../css/r/ri50dbckk.css';
import '../../css/b/bik43675b.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="q9jb7t68i"/><path class="ri50dbckk"/><path class="bik43675b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:environment-twotone"} {...others} />);
}

export default Component;
