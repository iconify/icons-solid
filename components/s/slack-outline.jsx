import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pe6cqt_uj.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="pe6cqt_uj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:slack-outline"} {...others} />);
}

export default Component;
