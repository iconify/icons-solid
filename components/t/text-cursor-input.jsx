import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/b/b5c4grbet.css';
import '../../css/l/lhiwfh9vy.css';
import '../../css/r/r56t8vgol.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><defs><linearGradient id="SVGbKbg3c5x" x1="9" x2="15" y1="2.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGbKbg3c5x)" class="b5c4grbet"/><path class="lhiwfh9vy wm-a"/><path class="r56t8vgol wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-utsav:text-cursor-input"} {...others} />);
}

export default Component;
