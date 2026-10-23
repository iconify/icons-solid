import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f1rc_1bfm.css';
import '../../css/g/gy4bdabyq.css';
import '../../css/u/ulwbbn_2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f1rc_1bfm"/><path class="gy4bdabyq"/><path class="ulwbbn_2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-fading-play-duotone"} {...others} />);
}

export default Component;
