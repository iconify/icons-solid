import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ttjf70i0h.css';
import '../../css/m/mzksfebbp.css';
import '../../css/c/cuoosoeax.css';
import '../../css/v/v--gfobro.css';
import '../../css/z/z4pqw4bkp.css';
import '../../css/m/mhs3orbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ttjf70i0h"/><path class="mzksfebbp wm-a"/><path class="cuoosoeax wm-a"/><path class="v--gfobro wm-a"/><path class="wm-s z4pqw4bkp"/><path class="mhs3orbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:dragon-head"} {...others} />);
}

export default Component;
