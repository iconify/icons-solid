import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/d/d4__2oeqk.css';
import '../../css/x/xw3d96bat.css';
import '../../css/t/tik_qtb5w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="d4__2oeqk"/><circle class="xw3d96bat"/><path class="tik_qtb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-cash-bill-1-billing-bills-payment-finance-cash-currency-money-accounting"} {...others} />);
}

export default Component;
