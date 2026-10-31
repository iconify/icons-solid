import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/br5mosotw.css';
import '../../css/v/v55e9m9et.css';
import '../../css/m/mtfcs5j7d.css';
import '../../css/c/c9_4nbbnq.css';
import '../../css/i/ix5-bubpo.css';
import '../../css/v/vgeqqevhe.css';
import '../../css/k/klerxox2s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="br5mosotw wm-k"/><path class="v55e9m9et wm-deco"/><path class="mtfcs5j7d wm-k"/><path class="c9_4nbbnq wm-k"/><path class="ix5-bubpo wm-shadow"/><path class="vgeqqevhe wm-shine"/><path class="klerxox2s wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:wallet"} {...others} />);
}

export default Component;
