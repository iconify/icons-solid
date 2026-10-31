import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/x6ba-xb2f.css';
import '../../css/b/b0hy6mbvk.css';
import '../../css/v/v3y8w8e7t.css';
import '../../css/q/qmkx05daq.css';
import '../../css/b/b9lfvgbtk.css';
import '../../css/l/ltuducynh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow x6ba-xb2f"/><path class="b0hy6mbvk"/><path class="v3y8w8e7t"/><path class="qmkx05daq"/><path class="b9lfvgbtk"/><path class="ltuducynh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mouse"} {...others} />);
}

export default Component;
