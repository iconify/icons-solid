import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mkyzfxerg.css';
import '../../css/h/hig9m7vrv.css';
import '../../css/m/mq7-r4b0b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="mkyzfxerg"/><circle class="hig9m7vrv"/><path class="mq7-r4b0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-cash-bill-3-accounting-billing-payment-finance-cash-currency-money-bill"} {...others} />);
}

export default Component;
