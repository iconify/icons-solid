import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ajy7dtmkz.css';
import '../../css/q/qmrj1h8ac.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="ajy7dtmkz"/><path class="qmrj1h8ac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-atm-card-1-credit-pay-payment-debit-card-finance-plastic-money"} {...others} />);
}

export default Component;
