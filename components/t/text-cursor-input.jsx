import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/s-3crkunr.css';
import '../../css/g/gd1pb3blt.css';
import '../../css/q/qqxu292wq.css';
import '../../css/a/aou0hlbil.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="s-3crkunr wm-shadow"/><path class="gd1pb3blt"/><path class="qqxu292wq"/><path class="aou0hlbil"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:text-cursor-input"} {...others} />);
}

export default Component;
