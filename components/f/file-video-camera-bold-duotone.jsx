import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o-vlo5b_t.css';
import '../../css/g/gpx85eb-n.css';
import '../../css/m/m7t4xqbqx.css';
import '../../css/s/s8qju0q_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="o-vlo5b_t"/><path class="gpx85eb-n"/><path class="m7t4xqbqx"/><path class="s8qju0q_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-video-camera-bold-duotone"} {...others} />);
}

export default Component;
