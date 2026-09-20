import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5e5623cj.css';
import '../../css/f/fjjuhwb3o.css';
import '../../css/k/k17j4pb9z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b5e5623cj"/><path class="fjjuhwb3o"/><path class="k17j4pb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:money-payments-cash-payment-coin"} {...others} />);
}

export default Component;
