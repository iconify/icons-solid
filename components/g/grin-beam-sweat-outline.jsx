import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ownno6b1t.css';
import '../../css/u/uk_qrqhcy.css';
import '../../css/o/o8ws2ibpr.css';
import '../../css/m/m1wbw2bxz.css';
import '../../css/i/i86vhi2cf.css';
import '../../css/g/gfy4qmhib.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ownno6b1t"/><path class="uk_qrqhcy"/><path clip-rule="evenodd" class="o8ws2ibpr"/><path clip-rule="evenodd" class="m1wbw2bxz"/><path class="i86vhi2cf"/><path clip-rule="evenodd" class="gfy4qmhib"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:grin-beam-sweat-outline"} {...others} />);
}

export default Component;
