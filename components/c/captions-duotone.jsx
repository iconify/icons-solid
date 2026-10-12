import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gr5g80bwz.css';
import '../../css/m/mftdyfxbo.css';
import '../../css/n/nn4w9sb3d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gr5g80bwz"/><path class="mftdyfxbo"/><path class="nn4w9sb3d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:captions-duotone"} {...others} />);
}

export default Component;
