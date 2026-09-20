import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kebp8vbig.css';
import '../../css/u/ui8u4ns2y.css';
import '../../css/a/axz1i1r4g.css';
import '../../css/d/dlgm9h3nj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kebp8vbig"/><path class="ui8u4ns2y"/><path class="axz1i1r4g"/><path class="dlgm9h3nj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:palette-round-linear"} {...others} />);
}

export default Component;
