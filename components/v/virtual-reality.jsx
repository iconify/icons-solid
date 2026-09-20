import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xig6ubczr.css';
import '../../css/t/tnfc9q2oy.css';
import '../../css/e/e-s49bcwn.css';
import '../../css/y/yhp5ivbqy.css';
import '../../css/y/yceeixbpx.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/j/jici7gk1y.css';
import '../../css/s/sg18plb6l.css';
import '../../css/e/e6k6xlvwk.css';
import '../../css/o/oigdbfbmx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="xig6ubczr"/><path class="tnfc9q2oy"/><path class="e-s49bcwn"/><path class="yhp5ivbqy"/><path class="yceeixbpx"/><g class="x8poo_bjf"><path class="jici7gk1y"/><path class="sg18plb6l"/><path class="e6k6xlvwk"/><path class="oigdbfbmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:virtual-reality"} {...others} />);
}

export default Component;
