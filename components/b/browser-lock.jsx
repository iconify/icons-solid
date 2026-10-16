import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ryosbh_ci.css';
import '../../css/d/dwrbldbpv.css';
import '../../css/g/gk9rljbji.css';
import '../../css/e/e7ypefbqr.css';
import '../../css/b/bcv21-brt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ryosbh_ci"/><rect class="dwrbldbpv"/><path class="gk9rljbji"/><rect class="e7ypefbqr"/><path class="bcv21-brt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser-lock"} {...others} />);
}

export default Component;
