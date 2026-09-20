import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/awvdq6why.css';
import '../../css/b/brhpnkb7j.css';
import '../../css/l/ltbo8bbvn.css';
import '../../css/w/w0bjuv2rl.css';
import '../../css/c/c9p9yvbmp.css';
import '../../css/e/ebdlf6bxa.css';
import '../../css/j/j-gwx-8ra.css';
import '../../css/l/l2rf2fdkp.css';
import '../../css/s/s8e-8zyot.css';
import '../../css/j/jis9k95cz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="awvdq6why"/><path class="brhpnkb7j"/><path class="ltbo8bbvn"/><path class="w0bjuv2rl"/><path class="c9p9yvbmp"/><path class="ebdlf6bxa"/><path class="j-gwx-8ra"/><path class="l2rf2fdkp"/><path class="s8e-8zyot"/><path class="jis9k95cz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:scooter-3"} {...others} />);
}

export default Component;
