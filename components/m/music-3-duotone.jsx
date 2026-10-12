import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9psl9bzc.css';
import '../../css/m/m49r26bmi.css';
import '../../css/p/pf_z20b-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s9psl9bzc"/><path class="m49r26bmi"/><path class="pf_z20b-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:music-3-duotone"} {...others} />);
}

export default Component;
