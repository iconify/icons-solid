import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sbjdo9b9c.css';
import '../../css/k/kp20a2que.css';
import '../../css/g/gwfb7koru.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="sbjdo9b9c"/><path class="kp20a2que"/></g><path class="gwfb7koru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:shopping-jewelry-gold-gold-money-payment-bars-finance-wealth-bullion"} {...others} />);
}

export default Component;
