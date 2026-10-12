import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m06afk08h.css';
import '../../css/u/u50bmlwji.css';
import '../../css/d/d_i5s9b1t.css';
import '../../css/s/skp8tjssj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m06afk08h"/><path class="u50bmlwji"/><path class="d_i5s9b1t"/><path class="skp8tjssj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-pen-duotone"} {...others} />);
}

export default Component;
