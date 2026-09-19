import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6bo7z4nj.css';
import '../../css/w/wiimycc-x.css';
import '../../css/t/t4p_o0eck.css';
import '../../css/i/icsnghbsk.css';
import '../../css/s/s-a4cubto.css';
import '../../css/c/cfx1q448n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="l6bo7z4nj"/><path class="wiimycc-x"/><path class="t4p_o0eck"/><path class="icsnghbsk"/><path class="s-a4cubto"/><path class="cfx1q448n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:clapping-hands-medium-dark"} {...others} />);
}

export default Component;
