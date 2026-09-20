import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxxx8-_sp.css';
import '../../css/h/hp5jyobim.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fxxx8-_sp"/><path class="hp5jyobim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:money-payments-credit-card-visa"} {...others} />);
}

export default Component;
