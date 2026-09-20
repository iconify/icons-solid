import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfn4zobhp.css';
import '../../css/h/hj02pj7tw.css';
import '../../css/h/huuajhmrh.css';
import '../../css/u/uap4xwgul.css';
import '../../css/f/fm5fbub4o.css';
import '../../css/t/tdhzq11dq.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xfn4zobhp"/><path class="hj02pj7tw"/><circle class="huuajhmrh"/><path class="uap4xwgul"/><path class="fm5fbub4o"/><path class="tdhzq11dq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:crying-face"} {...others} />);
}

export default Component;
