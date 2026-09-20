import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fco4h-r_s.css';
import '../../css/l/ljjk5bimi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fco4h-r_s"/><path class="ljjk5bimi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:cashless-payment-qr-code-basket-bold"} {...others} />);
}

export default Component;
