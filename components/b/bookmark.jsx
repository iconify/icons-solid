import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/st399vzks.css';
import '../../css/a/a6_k4cbix.css';
import '../../css/q/qg5_gmbiq.css';
import '../../css/n/n_vkc2bhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="st399vzks wm-k"/><path class="a6_k4cbix wm-k"/><path class="qg5_gmbiq wm-k"/><path class="n_vkc2bhv wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:bookmark"} {...others} />);
}

export default Component;
