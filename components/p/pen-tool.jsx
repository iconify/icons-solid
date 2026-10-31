import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cq79q9b6z.css';
import '../../css/f/flda1zb7r.css';
import '../../css/h/hbshrxb0p.css';
import '../../css/k/ky5cbpbbs.css';
import '../../css/p/peo8dcc3o.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="cq79q9b6z"/><path class="flda1zb7r"/><path class="hbshrxb0p wm-shine"/><path class="ky5cbpbbs wm-k"/><path class="peo8dcc3o wm-a"/><path class="i49wp7b0m wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:pen-tool"} {...others} />);
}

export default Component;
