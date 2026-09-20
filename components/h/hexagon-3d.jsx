import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fk68dsbja.css';
import '../../css/r/rus1vdoss.css';
import '../../css/s/s1albsb-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fk68dsbja"/><path class="rus1vdoss"/><path class="s1albsb-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hexagon-3d"} {...others} />);
}

export default Component;
