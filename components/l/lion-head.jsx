import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s-mendbce.css';
import '../../css/i/il5t5b5wv.css';
import '../../css/x/xty-7wbby.css';
import '../../css/s/sx5r1rbqc.css';
import '../../css/e/ewbtvpc_j.css';
import '../../css/k/ksg_sxbno.css';
import '../../css/j/jgtis7b9v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="s-mendbce"/><path class="il5t5b5wv"/><path class="wm-shine xty-7wbby"/><path class="sx5r1rbqc wm-k"/><path class="ewbtvpc_j wm-a"/><path class="ksg_sxbno wm-s"/><path class="jgtis7b9v wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:lion-head"} {...others} />);
}

export default Component;
