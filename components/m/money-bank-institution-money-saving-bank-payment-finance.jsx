import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x0ik6kxpc.css';
import '../../css/m/miqf05kal.css';
import '../../css/r/r25emkbcf.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="x0ik6kxpc"/><rect class="miqf05kal"/><path class="r25emkbcf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-bank-institution-money-saving-bank-payment-finance"} {...others} />);
}

export default Component;
