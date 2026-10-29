import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pqr3i4bwp.css';
import '../../css/v/v3d4ftbhi.css';
import '../../css/j/jbrc89-yx.css';
import '../../css/s/s-1pw_b_u.css';
import '../../css/z/zawcaob5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="pqr3i4bwp wm-deco"/><path class="v3d4ftbhi wm-deco"/><path class="jbrc89-yx wm-deco"/><path class="s-1pw_b_u"/><path class="zawcaob5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:choco-strawberry-blueprint"} {...others} />);
}

export default Component;
