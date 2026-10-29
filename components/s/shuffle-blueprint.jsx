import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uv2t8jboo.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/g/gf2kb8bvg.css';
import '../../css/g/gkho1-4zp.css';
import '../../css/h/hgzrf4btz.css';
import '../../css/f/fzthtmvbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="uv2t8jboo wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="gf2kb8bvg wm-k"/><path class="gkho1-4zp wm-a"/><path class="hgzrf4btz wm-k"/><path class="fzthtmvbv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:shuffle-blueprint"} {...others} />);
}

export default Component;
