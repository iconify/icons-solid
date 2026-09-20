import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cn3h7acaf.css';
import '../../css/x/xcv6q1bnv.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="cn3h7acaf"/><circle class="xcv6q1bnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-currency-euro-circle-exchange-payment-euro-forex-finance-currency-money-foreign"} {...others} />);
}

export default Component;
