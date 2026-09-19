import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqqblwb_n.css';
import '../../css/r/riv4p4b6h.css';
import '../../css/p/pgv_z0_ld.css';
import '../../css/j/j0nfglsrz.css';
import '../../css/q/q6rdly5qd.css';
import '../../css/e/eoqfvcc7c.css';
import '../../css/c/cxorxdbrs.css';
import '../../css/r/rzd-wq14j.css';
import '../../css/p/p8zh9fbjb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vqqblwb_n"/><path class="riv4p4b6h"/><path class="pgv_z0_ld"/><path class="j0nfglsrz"/><path class="q6rdly5qd"/><path class="eoqfvcc7c"/><path class="cxorxdbrs"/><path class="rzd-wq14j"/><path class="p8zh9fbjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:bouquet"} {...others} />);
}

export default Component;
