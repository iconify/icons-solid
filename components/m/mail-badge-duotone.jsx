import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ic-ypnb0e.css';
import '../../css/v/vco6qb1-p.css';
import '../../css/q/qwy_kna5r.css';
import '../../css/c/cr4zr3btz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ic-ypnb0e"/><path class="vco6qb1-p"/><path class="qwy_kna5r"/><path class="cr4zr3btz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:mail-badge-duotone"} {...others} />);
}

export default Component;
