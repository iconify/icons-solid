import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/r/reshl9bws.css';
import '../../css/b/bfbqg-62g.css';
import '../../css/o/ouw5kpbrn.css';
import '../../css/u/u7tu3_vxu.css';
import '../../css/g/ghcq3vt4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="reshl9bws"/><path class="bfbqg-62g wm-shine"/><path class="ouw5kpbrn wm-k"/><path class="u7tu3_vxu wm-a"/><path class="ghcq3vt4r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:shield-plus"} {...others} />);
}

export default Component;
