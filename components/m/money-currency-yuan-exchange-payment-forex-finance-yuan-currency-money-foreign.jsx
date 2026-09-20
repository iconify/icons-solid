import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i8rkslb8y.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="i8rkslb8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-currency-yuan-exchange-payment-forex-finance-yuan-currency-money-foreign"} {...others} />);
}

export default Component;
