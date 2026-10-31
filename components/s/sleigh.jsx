import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/d/d7c7tibwu.css';
import '../../css/c/ck5mj_mbs.css';
import '../../css/i/i5sn--6zu.css';
import '../../css/p/p9pn97g5g.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="d7c7tibwu"/><path class="ck5mj_mbs wm-shine"/><path class="i5sn--6zu wm-k"/><path class="p9pn97g5g wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:sleigh"} {...others} />);
}

export default Component;
