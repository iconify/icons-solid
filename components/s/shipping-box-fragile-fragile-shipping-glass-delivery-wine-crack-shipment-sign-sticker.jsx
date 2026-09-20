import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bm622bc3w.css';
import '../../css/i/i4xr4296m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="bm622bc3w"/><path class="i4xr4296m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shipping-box-fragile-fragile-shipping-glass-delivery-wine-crack-shipment-sign-sticker"} {...others} />);
}

export default Component;
