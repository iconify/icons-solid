import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dfots6o3m.css';
import '../../css/y/y1z_pebua.css';
import '../../css/d/dps-eg3jw.css';
import '../../css/q/qd64s6b1d.css';
import '../../css/e/e-6gv4b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dfots6o3m"/><path class="y1z_pebua"/><path class="dps-eg3jw"/><path class="qd64s6b1d"/><path class="e-6gv4b7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:charger-1"} {...others} />);
}

export default Component;
