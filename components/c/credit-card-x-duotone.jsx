import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_e3spb3b.css';
import '../../css/j/joz_vvjya.css';
import '../../css/n/n55f-kb0p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r_e3spb3b"/><path class="joz_vvjya"/><path class="n55f-kb0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:credit-card-x-duotone"} {...others} />);
}

export default Component;
