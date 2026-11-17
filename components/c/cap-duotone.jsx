import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ft4bv5pda.css';
import '../../css/m/mepxv4b3w.css';
import '../../css/o/os72iwz3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ft4bv5pda"/><path class="mepxv4b3w"/><path class="os72iwz3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cap-duotone"} {...others} />);
}

export default Component;
