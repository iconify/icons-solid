import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/e5o-5eeiz.css';
import '../../css/q/q6u36hbwk.css';
import '../../css/f/flwbdztss.css';
import '../../css/i/isdq3ll-w.css';
import '../../css/l/ljeitrr-k.css';
import '../../css/i/i4nz8jb0a.css';
import '../../css/t/tuplv7bpa.css';
import '../../css/l/lc__60alc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="e5o-5eeiz"/><path class="q6u36hbwk wm-s"/><path class="flwbdztss"/><path class="isdq3ll-w wm-shine"/><path class="ljeitrr-k wm-k"/><path class="i4nz8jb0a wm-s"/><path class="tuplv7bpa"/><path class="lc__60alc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:user-star"} {...others} />);
}

export default Component;
