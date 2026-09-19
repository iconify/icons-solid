import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kq4nlabal.css';
import '../../css/f/fmwk-tbtr.css';
import '../../css/a/a1tzygbyc.css';
import '../../css/v/vj3umz3rb.css';
import '../../css/d/d7wcodbdc.css';
import '../../css/q/qpavxnm1l.css';
import '../../css/m/m9flswb-i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="kq4nlabal"/><path class="fmwk-tbtr"/><path class="a1tzygbyc"/><path clip-rule="evenodd" class="vj3umz3rb"/><path class="d7wcodbdc"/><path class="qpavxnm1l"/><path class="m9flswb-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:landmark-1"} {...others} />);
}

export default Component;
