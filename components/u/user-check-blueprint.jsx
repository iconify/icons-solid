import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l2rk8jw5q.css';
import '../../css/r/rm9gvi60a.css';
import '../../css/h/hwoh2g1ry.css';
import '../../css/u/uwldxv39u.css';
import '../../css/e/eup2bcbfo.css';
import '../../css/e/ecxhesbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="l2rk8jw5q wm-deco"/><path class="rm9gvi60a wm-deco"/><path class="hwoh2g1ry wm-deco"/><path class="uwldxv39u wm-k"/><path class="eup2bcbfo wm-s"/><path class="ecxhesbwt wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-check-blueprint"} {...others} />);
}

export default Component;
