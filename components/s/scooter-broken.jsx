import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gs6s0-4rn.css';
import '../../css/q/qnqthcbii.css';
import '../../css/m/m8rlb1beu.css';
import '../../css/q/q75k85b7n.css';
import '../../css/x/x0uzfm1ll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="gs6s0-4rn"/><path class="qnqthcbii"/><path class="m8rlb1beu"/><path class="q75k85b7n"/><path class="x0uzfm1ll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:scooter-broken"} {...others} />);
}

export default Component;
