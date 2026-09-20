import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/eajz1t1tw.css';
import '../../css/n/nogaozbzm.css';
import '../../css/y/yjnrbbbfw.css';
import '../../css/a/aslq4fbgw.css';
import '../../css/w/wiapkjbwf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><ellipse class="eajz1t1tw"/><path class="nogaozbzm"/><path class="yjnrbbbfw"/><path class="aslq4fbgw"/><path class="wiapkjbwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance"} {...others} />);
}

export default Component;
