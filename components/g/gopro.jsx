import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/brlwmghtz.css';
import '../../css/o/oogtep92i.css';
import '../../css/q/qo0xsrbfa.css';
import '../../css/w/w5rzfabdq.css';
import '../../css/v/vqd-szbes.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="brlwmghtz"/><rect class="oogtep92i"/><circle class="qo0xsrbfa"/><path class="w5rzfabdq"/><rect class="vqd-szbes"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gopro"} {...others} />);
}

export default Component;
