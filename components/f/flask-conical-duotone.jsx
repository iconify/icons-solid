import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kr7eu_21a.css';
import '../../css/j/j4cz7fbph.css';
import '../../css/m/m8almhbma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kr7eu_21a"/><path class="j4cz7fbph"/><path class="m8almhbma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:flask-conical-duotone"} {...others} />);
}

export default Component;
