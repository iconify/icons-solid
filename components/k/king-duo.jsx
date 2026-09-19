import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wbzpftb7t.css';
import '../../css/n/nxp8z3bju.css';
import '../../css/t/t06brsbwg.css';
import '../../css/f/f4xe2vbju.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wbzpftb7t"/><path class="nxp8z3bju"/><path class="t06brsbwg"/><path class="f4xe2vbju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:king-duo"} {...others} />);
}

export default Component;
