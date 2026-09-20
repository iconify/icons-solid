import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7pevhgad.css';
import '../../css/w/womdl55sm.css';
import '../../css/s/sxe-s0bwc.css';
import '../../css/j/jy4tui4pk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="m7pevhgad"/><path class="womdl55sm"/><rect class="sxe-s0bwc"/><rect class="jy4tui4pk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:happy-light"} {...others} />);
}

export default Component;
