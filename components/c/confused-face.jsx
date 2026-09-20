import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfn4zobhp.css';
import '../../css/h/huuajhmrh.css';
import '../../css/o/ojl2heb3e.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xfn4zobhp"/><circle class="huuajhmrh"/><path class="ojl2heb3e"/><path class="tdhzq11dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:confused-face"} {...others} />);
}

export default Component;
