import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e7brf3b3o.css';
import '../../css/h/h13rvib7w.css';
import '../../css/p/pestg6bls.css';
import '../../css/p/ps7trjwfg.css';
import '../../css/o/o83_pnvzi.css';
import '../../css/k/kx5fkyhqd.css';

const viewBox = {"width":28,"height":28};
const content = `<g class="ft5dv1b6b"><path fill="url(#SVGVh09Jd6e)" class="e7brf3b3o"/><path fill="url(#SVGX0mpbdWG)" class="h13rvib7w"/><defs><linearGradient id="SVGVh09Jd6e" x1="5.75" x2="21.5" y1="3.5" y2="26.75" gradientUnits="userSpaceOnUse"><stop class="pestg6bls"/><stop offset="1" class="ps7trjwfg"/></linearGradient><linearGradient id="SVGX0mpbdWG" x1="10.023" x2="14.709" y1="14.398" y2="19.271" gradientUnits="userSpaceOnUse"><stop class="o83_pnvzi"/><stop offset="1" class="kx5fkyhqd"/></linearGradient></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-color:dismiss-circle-28"} {...others} />);
}

export default Component;
