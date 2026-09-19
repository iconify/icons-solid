import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5vgbcb_s.css';
import '../../css/z/zjiwecbao.css';
import '../../css/b/b1mhhebzu.css';
import '../../css/d/d8x7f6q1i.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="y5vgbcb_s"/><path class="zjiwecbao"/><path class="b1mhhebzu"/><path class="d8x7f6q1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ge-4x3"} {...others} />);
}

export default Component;
