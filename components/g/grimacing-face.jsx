import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yot9f06rc.css';
import '../../css/g/g66xdu2ki.css';
import '../../css/f/f6e04nw5y.css';
import '../../css/h/huuajhmrh.css';
import '../../css/c/czgob2bpy.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="yot9f06rc"/><path class="g66xdu2ki"/><path class="f6e04nw5y"/><circle class="huuajhmrh"/><path class="czgob2bpy"/><path class="tdhzq11dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:grimacing-face"} {...others} />);
}

export default Component;
