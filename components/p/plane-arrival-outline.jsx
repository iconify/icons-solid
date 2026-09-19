import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vtrrodxke.css';
import '../../css/n/nya780brt.css';
import '../../css/k/kdlbhi_wo.css';
import '../../css/q/qska6tbiv.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vtrrodxke"/><path clip-rule="evenodd" class="nya780brt"/><path class="kdlbhi_wo"/><path clip-rule="evenodd" class="qska6tbiv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:plane-arrival-outline"} {...others} />);
}

export default Component;
