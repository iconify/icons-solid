import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6hp2xf_p.css';
import '../../css/i/ioa1vxxno.css';
import '../../css/r/rmdxzccvt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w6hp2xf_p"/><path class="ioa1vxxno"/><path class="rmdxzccvt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-cog-duotone"} {...others} />);
}

export default Component;
