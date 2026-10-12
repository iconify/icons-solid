import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjvg-o7zu.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/i/ij2u_kykf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pjvg-o7zu"/><path class="s1a2eew1e"/><path class="ij2u_kykf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-stop-duotone"} {...others} />);
}

export default Component;
