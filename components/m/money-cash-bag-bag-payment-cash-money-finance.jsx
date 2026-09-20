import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/orng1hbvb.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="orng1hbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-cash-bag-bag-payment-cash-money-finance"} {...others} />);
}

export default Component;
