import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ieqne-uup.css';
import '../../css/q/q73-lebvq.css';
import '../../css/d/d1y700bwp.css';
import '../../css/c/cj91917ct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ieqne-uup wm-shadow"/><path class="q73-lebvq"/><path class="d1y700bwp"/><path class="cj91917ct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wand"} {...others} />);
}

export default Component;
