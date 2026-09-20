import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/puq3pabjk.css';
import '../../css/g/g_cq3bctl.css';
import '../../css/p/p9oxf0bgl.css';
import '../../css/n/nh5il_a1p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="puq3pabjk"/><path class="g_cq3bctl"/><circle class="p9oxf0bgl"/><path class="nh5il_a1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:book-info-2"} {...others} />);
}

export default Component;
