import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yaadxqn-l.css';
import '../../css/l/lk3ecc0yb.css';
import '../../css/p/p_ob1gbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yaadxqn-l"/><path class="lk3ecc0yb"/><path class="p_ob1gbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cashless-payment-smart-pay-bus-smartphone-qr-bold"} {...others} />);
}

export default Component;
