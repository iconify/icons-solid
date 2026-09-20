import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kmqwfkbdg.css';
import '../../css/a/apefvdupm.css';
import '../../css/p/p_qjaxbml.css';
import '../../css/r/r_3lljbpa.css';
import '../../css/o/oazq83bmy.css';
import '../../css/l/lpogj4adh.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><circle class="kmqwfkbdg"/><circle class="apefvdupm"/><path class="p_qjaxbml"/><path class="r_3lljbpa"/><path class="oazq83bmy"/><path class="lpogj4adh"/><path class="si_mtzbvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:usb-square-broken"} {...others} />);
}

export default Component;
