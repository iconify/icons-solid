import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jg2ux6bjq.css';
import '../../css/g/gm_ls9i_l.css';
import '../../css/p/p_h-gibxa.css';
import '../../css/e/ebp1lyblv.css';
import '../../css/g/gg836pbwc.css';
import '../../css/k/k94_x4b2o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jg2ux6bjq wm-k"/><path class="gm_ls9i_l wm-k"/><path class="p_h-gibxa wm-k"/><path class="ebp1lyblv wm-a"/><path class="gg836pbwc wm-a"/><path class="k94_x4b2o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:tornado"} {...others} />);
}

export default Component;
