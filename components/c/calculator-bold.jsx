import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usz420qgc.css';
import '../../css/x/xatv18b1s.css';
import '../../css/h/h_xt7vbfu.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="usz420qgc"><rect class="xatv18b1s"/><path class="h_xt7vbfu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:calculator-bold"} {...others} />);
}

export default Component;
