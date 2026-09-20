import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zv1i2gnkg.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zv1i2gnkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:money-currency-euro-exchange-payment-euro-forex-finance-currency-money-foreign"} {...others} />);
}

export default Component;
