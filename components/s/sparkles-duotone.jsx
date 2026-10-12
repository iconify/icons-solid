import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4__4mvqr.css';
import '../../css/m/m0glyo1pp.css';
import '../../css/j/j_w-dobdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m4__4mvqr"/><path class="m0glyo1pp"/><path class="j_w-dobdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:sparkles-duotone"} {...others} />);
}

export default Component;
