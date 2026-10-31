import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/w/w41_5bc4c.css';
import '../../css/r/r2why-bng.css';
import '../../css/n/nw-8wvb1t.css';
import '../../css/q/qiyypgbtt.css';
import '../../css/w/w8x39x84j.css';
import '../../css/z/z5qsc6boq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="w41_5bc4c"/><path class="r2why-bng"/><path class="nw-8wvb1t wm-shine"/><path class="qiyypgbtt wm-k"/><path class="w8x39x84j wm-a"/><path class="wm-deco z5qsc6boq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:gift"} {...others} />);
}

export default Component;
