import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m724hab2g.css';
import '../../css/m/m8f33hbdy.css';
import '../../css/h/h2pjhacsp.css';
import '../../css/q/q_8a2tm5e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m724hab2g"/><path class="m8f33hbdy"/><path class="h2pjhacsp"/><path class="q_8a2tm5e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:i-mac"} {...others} />);
}

export default Component;
