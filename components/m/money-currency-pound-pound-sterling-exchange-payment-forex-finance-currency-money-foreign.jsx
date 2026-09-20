import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a827cubck.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="a827cubck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-currency-pound-pound-sterling-exchange-payment-forex-finance-currency-money-foreign"} {...others} />);
}

export default Component;
