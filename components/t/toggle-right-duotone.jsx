import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrknojtdi.css';
import '../../css/z/zunmuyb3r.css';
import '../../css/b/bwdud_gdb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mrknojtdi"/><path class="zunmuyb3r"/><path clip-rule="evenodd" class="bwdud_gdb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:toggle-right-duotone"} {...others} />);
}

export default Component;
