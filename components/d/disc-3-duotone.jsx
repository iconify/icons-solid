import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/to1kaabrt.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/s/sx6ponwtg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="to1kaabrt"/><path class="g4vvtk_cw"/><path class="sx6ponwtg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:disc-3-duotone"} {...others} />);
}

export default Component;
