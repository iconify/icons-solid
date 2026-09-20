import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p8gs2je5m.css';
import '../../css/k/k2yj1cc6l.css';
import '../../css/m/mll-n19-s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><rect class="p8gs2je5m"/><path class="k2yj1cc6l"/><circle class="mll-n19-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-atm-card-3-deposit-money-payment-finance-atm-withdraw"} {...others} />);
}

export default Component;
