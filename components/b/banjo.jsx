import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvvjymb6q.css';
import '../../css/x/x8gb8hbmc.css';
import '../../css/b/b1iyieblx.css';
import '../../css/g/gs1k4clkn.css';
import '../../css/m/m7kldsv2e.css';
import '../../css/g/gsizr9buh.css';
import '../../css/p/p9qkcz_6w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="pvvjymb6q"/><path class="x8gb8hbmc"/><path class="b1iyieblx"/><path class="gs1k4clkn"/><path class="m7kldsv2e"/><path class="gsizr9buh"/><path class="p9qkcz_6w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:banjo"} {...others} />);
}

export default Component;
