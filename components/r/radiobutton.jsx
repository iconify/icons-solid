import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhl7ahbil.css';
import '../../css/p/pwvx_w0yk.css';
import '../../css/w/w1db71bet.css';
import '../../css/t/tm5b5waxb.css';
import '../../css/d/dmot9tkhf.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="rhl7ahbil"/><path class="pwvx_w0yk"/><path class="w1db71bet"/><circle class="tm5b5waxb"/><path class="dmot9tkhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:radiobutton"} {...others} />);
}

export default Component;
