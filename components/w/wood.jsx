import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p8nulxl3s.css';
import '../../css/p/pap5xhb-b.css';
import '../../css/v/vgionz7jo.css';
import '../../css/f/f51xn97ff.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="p8nulxl3s"/><path class="pap5xhb-b"/><path class="vgionz7jo"/><path class="f51xn97ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:wood"} {...others} />);
}

export default Component;
