import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0fnf1b8g.css';
import '../../css/d/d62v6vr1x.css';
import '../../css/c/cj9vugbtp.css';
import '../../css/h/hdr9guboz.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/d/d6hsydbgj.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/w/wuh9tbc7s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="f0fnf1b8g"/><path class="d62v6vr1x"/><path class="cj9vugbtp"/><path class="hdr9guboz"/><path class="ps7z7wb7n"/><path class="d6hsydbgj"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="wuh9tbc7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-bald-medium-dark"} {...others} />);
}

export default Component;
