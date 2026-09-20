import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9wb9-9vi.css';
import '../../css/g/gcuqp1bop.css';
import '../../css/f/f45-txbec.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dq3mh0bqf.css';
import '../../css/m/mye91lbqs.css';
import '../../css/g/g7rfgmbjq.css';
import '../../css/x/xn121dbjz.css';

const viewBox = {"width":806,"height":582};
const content = `<defs><linearGradient id="SVGaNCgFuVd" x1="120" x2="730" y1="520" y2="60" gradientUnits="userSpaceOnUse"><stop offset="0" class="x9wb9-9vi"/><stop offset=".48" class="gcuqp1bop"/><stop offset="1" class="f45-txbec"/></linearGradient></defs><g fill="url(#SVGaNCgFuVd)" class="d2kvgvbvc"><path class="dq3mh0bqf"/><path class="mye91lbqs"/><path class="g7rfgmbjq"/><path class="xn121dbjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:flownib"} {...others} />);
}

export default Component;
