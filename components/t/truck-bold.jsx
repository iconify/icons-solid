import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v90cyqb4w.css';
import '../../css/g/gt1ijwbrf.css';
import '../../css/q/qta-3s5fl.css';
import '../../css/c/cq8t6x90d.css';
import '../../css/b/bls3ofb6o.css';
import '../../css/i/igdspjjsr.css';
import '../../css/f/fa98f-yya.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="v90cyqb4w"/><path clip-rule="evenodd" class="gt1ijwbrf"/><path class="qta-3s5fl"/><path class="cq8t6x90d"/><path clip-rule="evenodd" class="bls3ofb6o"/><path class="igdspjjsr"/><path class="fa98f-yya"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:truck-bold"} {...others} />);
}

export default Component;
