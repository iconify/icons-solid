import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/df1d8505t.css';
import '../../css/f/f0fnf1b8g.css';
import '../../css/l/lsqqqhz4l.css';
import '../../css/z/zmp3ysbhs.css';
import '../../css/c/cj9vugbtp.css';
import '../../css/h/hdr9guboz.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/c/cnwgomljg.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/w/wuh9tbc7s.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="df1d8505t"/><path class="f0fnf1b8g"/><path class="lsqqqhz4l"/><path class="zmp3ysbhs"/><path class="cj9vugbtp"/><path class="hdr9guboz"/><path class="ps7z7wb7n"/><path class="cnwgomljg"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="wuh9tbc7s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:person-beard-medium-dark"} {...others} />);
}

export default Component;
