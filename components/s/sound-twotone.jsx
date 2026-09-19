import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aij89zban.css';
import '../../css/q/qumb2w6hl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="aij89zban"/><path class="qumb2w6hl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:sound-twotone"} {...others} />);
}

export default Component;
