import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/efp59t_7a.css';
import '../../css/b/bkpj8-bdl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="efp59t_7a"/><path class="bkpj8-bdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shipping-transfer-cart-package-box-fulfillment-cart-warehouse-shipping-delivery"} {...others} />);
}

export default Component;
