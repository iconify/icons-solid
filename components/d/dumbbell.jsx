import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/k/k_vx5zu1x.css';
import '../../css/g/gndq0ebyi.css';
import '../../css/d/d88nyzisv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="k_vx5zu1x"/><path class="gndq0ebyi"/><path class="d88nyzisv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:dumbbell"} {...others} />);
}

export default Component;
