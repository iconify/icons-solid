import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zmygrub0v.css';
import '../../css/y/ym65zmakm.css';
import '../../css/m/mbkxd1opa.css';
import '../../css/m/m1ygqmchb.css';
import '../../css/y/ydqjgw04b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zmygrub0v"/><path class="wm-shadow ym65zmakm"/><path class="mbkxd1opa"/><path class="m1ygqmchb"/><path class="wm-s ydqjgw04b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heading-3"} {...others} />);
}

export default Component;
