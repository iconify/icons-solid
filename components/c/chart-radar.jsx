import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c90yv5-jm.css';
import '../../css/n/navkqjbfd.css';
import '../../css/i/i6k0atkeb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c90yv5-jm"/><path class="navkqjbfd"/><path class="i6k0atkeb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:chart-radar"} {...others} />);
}

export default Component;
