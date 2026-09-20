import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rscdq9bxz.css';
import '../../css/y/y3964j9du.css';
import '../../css/u/ugx24zbbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rscdq9bxz"/><path class="y3964j9du"/><path class="ugx24zbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:music-duotone"} {...others} />);
}

export default Component;
