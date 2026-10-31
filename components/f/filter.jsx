import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/yuo73jbol.css';
import '../../css/p/pb_h1c_pj.css';
import '../../css/l/l5bot_fnt.css';
import '../../css/b/bvtjggbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="yuo73jbol"/><path class="pb_h1c_pj wm-shine"/><path class="l5bot_fnt"/><path class="bvtjggbmx wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:filter"} {...others} />);
}

export default Component;
