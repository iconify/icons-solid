import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fvm-rjbdm.css';
import '../../css/f/fgi84lb4i.css';
import '../../css/k/kxzi-1bcp.css';
import '../../css/m/mhb6sub6m.css';
import '../../css/v/vkst6lb4l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="fvm-rjbdm"/><path class="fgi84lb4i"/><path class="kxzi-1bcp"/><path class="mhb6sub6m"/><path class="vkst6lb4l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:skis"} {...others} />);
}

export default Component;
