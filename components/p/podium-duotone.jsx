import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mshg-v-db.css';
import '../../css/t/t0telo9xo.css';
import '../../css/b/bc_nukbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mshg-v-db"/><path class="t0telo9xo"/><path class="bc_nukbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:podium-duotone"} {...others} />);
}

export default Component;
