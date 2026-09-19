import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b55uheb5p.css';
import '../../css/q/qtzm_4i0v.css';
import '../../css/h/hci12cifr.css';
import '../../css/n/nil0an2qe.css';
import '../../css/u/u8a6ddmtq.css';
import '../../css/h/h6_vwvb-a.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="b55uheb5p"/><path class="qtzm_4i0v"/><path class="hci12cifr"/><path class="nil0an2qe"/><path class="u8a6ddmtq"/><path class="h6_vwvb-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:playground-slide"} {...others} />);
}

export default Component;
