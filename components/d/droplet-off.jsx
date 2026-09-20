import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/plwbux8wl.css';
import '../../css/j/jd3_-d4_j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="plwbux8wl"/><path class="jd3_-d4_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:droplet-off"} {...others} />);
}

export default Component;
