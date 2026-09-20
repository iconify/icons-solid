import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u6u9q2rkt.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="u6u9q2rkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:money-payments-currency-euro-dollar-exchange"} {...others} />);
}

export default Component;
