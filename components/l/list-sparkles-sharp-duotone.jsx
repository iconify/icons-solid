import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/k/k5rty6s-p.css';
import '../../css/k/kl46ljbgy.css';
import '../../css/z/zlaspxbje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="k5rty6s-p"/><path class="kl46ljbgy"/><path class="zlaspxbje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-sparkles-sharp-duotone"} {...others} />);
}

export default Component;
