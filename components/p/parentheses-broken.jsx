import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n6daalb-j.css';
import '../../css/q/qu4x13nbg.css';
import '../../css/v/vkba6k5jk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="n6daalb-j"/><path class="qu4x13nbg"/><path class="vkba6k5jk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:parentheses-broken"} {...others} />);
}

export default Component;
