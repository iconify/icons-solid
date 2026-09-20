import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0dsanjek.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="g0dsanjek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-currency-dollar-dollar-exchange-payment-forex-finance-currency-money-foreign"} {...others} />);
}

export default Component;
