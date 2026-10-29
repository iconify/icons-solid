import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ii07wlrpv.css';
import '../../css/k/ka4sjzb_h.css';
import '../../css/w/w1bkdub3o.css';
import '../../css/a/adg_qib1g.css';
import '../../css/p/pbxq3bxvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ii07wlrpv wm-k"/><path class="ka4sjzb_h wm-k"/><path class="w1bkdub3o wm-k"/><path class="adg_qib1g wm-shine"/><path class="pbxq3bxvg wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:feather"} {...others} />);
}

export default Component;
