import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zmygrub0v.css';
import '../../css/y/ym65zmakm.css';
import '../../css/y/yhowb_b2r.css';
import '../../css/m/m1ygqmchb.css';
import '../../css/q/qo8z4vb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow zmygrub0v"/><path class="wm-shadow ym65zmakm"/><path class="yhowb_b2r"/><path class="m1ygqmchb"/><path class="qo8z4vb6c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:heading-1"} {...others} />);
}

export default Component;
