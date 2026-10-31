import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/c/c_noo4b9a.css';
import '../../css/y/yhtmpwoya.css';
import '../../css/x/xujno4b8g.css';
import '../../css/p/p-cqkx0gi.css';
import '../../css/l/lixim-bjn.css';
import '../../css/q/q2c8uyfpu.css';
import '../../css/u/u0ys4gdgp.css';
import '../../css/h/hcue293eq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="c_noo4b9a"/><path class="yhtmpwoya"/><path class="wm-shine xujno4b8g"/><path class="p-cqkx0gi wm-k"/><path class="lixim-bjn wm-a"/><path class="q2c8uyfpu"/><path class="u0ys4gdgp"/><path class="hcue293eq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:tombstone"} {...others} />);
}

export default Component;
