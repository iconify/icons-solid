import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcqwi2z0e.css';
import '../../css/i/ilfhnsbng.css';
import '../../css/g/gek4w1b1o.css';
import '../../css/l/lf-tr-sxi.css';
import '../../css/o/or_sdr2ar.css';
import '../../css/w/wobp--bmg.css';
import '../../css/y/ymnq81b6p.css';

const viewBox = {"width":72,"height":73};
const content = `<g class="ft5dv1b6b"><path class="kcqwi2z0e"/><path class="ilfhnsbng"/><path class="gek4w1b1o"/><path class="lf-tr-sxi"/><path class="or_sdr2ar"/><path class="wobp--bmg"/><path class="ymnq81b6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:uppy"} {...others} />);
}

export default Component;
