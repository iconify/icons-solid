import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ig26mjbzc.css';
import '../../css/t/t3jy2rbpz.css';
import '../../css/q/qr62tsbbz.css';
import '../../css/z/zth3hmbbw.css';
import '../../css/p/pnwnsi4_u.css';
import '../../css/w/wycjhibbk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><g clip-path="url(#SVGkRCCwb7V)"><path class="ig26mjbzc"/><path class="t3jy2rbpz"/><path class="qr62tsbbz"/><path class="zth3hmbbw"/><path class="pnwnsi4_u"/></g><defs><clipPath id="SVGkRCCwb7V"><path class="wycjhibbk"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:confetti-ball"} {...others} />);
}

export default Component;
