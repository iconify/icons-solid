import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/u/uutjnz7et.css';
import '../../css/n/nzrdnbbig.css';
import '../../css/k/k0ewegeoy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="uutjnz7et"/><rect class="nzrdnbbig"/><path class="k0ewegeoy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-cashier-shop-shopping-pay-payment-cashier-store-cash-register-machine"} {...others} />);
}

export default Component;
