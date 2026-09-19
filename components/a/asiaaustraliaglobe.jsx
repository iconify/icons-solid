import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4dm09b_v.css';
import '../../css/s/scg0arb9m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n4dm09b_v"/><path class="scg0arb9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:asiaaustraliaglobe"} {...others} />);
}

export default Component;
