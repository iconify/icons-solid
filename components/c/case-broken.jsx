import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uv3607vad.css';
import '../../css/t/tb-kfybul.css';
import '../../css/t/tg6vyv3do.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/e/e_466bh1b.css';
import '../../css/d/dfkb1eb4o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uv3607vad"/><path class="tb-kfybul"/><path class="tg6vyv3do"/><path class="jct4a2bzg"/><path class="e_466bh1b"/><path class="dfkb1eb4o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:case-broken"} {...others} />);
}

export default Component;
