import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hahab1lnp.css';
import '../../css/a/acr3xswjo.css';
import '../../css/v/vn6ipm1mc.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/n/na2by0bvs.css';
import '../../css/z/zj9rjgbqv.css';
import '../../css/s/s0gm1di8p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hahab1lnp wm-deco"/><path class="acr3xswjo wm-deco"/><path class="vn6ipm1mc wm-k"/><path class="wm-a xa3jgydgh"/><path class="na2by0bvs wm-s"/><path class="wm-k zj9rjgbqv"/><path class="s0gm1di8p wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heading-1-blueprint"} {...others} />);
}

export default Component;
