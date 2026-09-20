import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tj3g9kbrn.css';
import '../../css/p/p5_0fhvlg.css';
import '../../css/m/mgtgnwboj.css';
import '../../css/i/i7pk32q9v.css';
import '../../css/f/fwniy0djt.css';
import '../../css/g/gj9uzmbvg.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="ft5dv1b6b"><path class="tj3g9kbrn"/><path class="p5_0fhvlg"/><path class="mgtgnwboj"/><path class="i7pk32q9v"/><path class="fwniy0djt"/><path class="gj9uzmbvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:ghost"} {...others} />);
}

export default Component;
