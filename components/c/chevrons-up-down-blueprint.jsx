import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/cgssfdcel.css';
import '../../css/d/dlb4_kl3b.css';
import '../../css/x/xj9-8y3fv.css';
import '../../css/p/phmwp8b9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="cgssfdcel wm-deco"/><path class="dlb4_kl3b wm-deco"/><path class="xj9-8y3fv"/><path class="phmwp8b9d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevrons-up-down-blueprint"} {...others} />);
}

export default Component;
