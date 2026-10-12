import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix9hdebim.css';
import '../../css/q/q2875sbpw.css';
import '../../css/u/uvtbonwqa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ix9hdebim"/><path class="q2875sbpw"/><path class="uvtbonwqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:cloudy-duotone"} {...others} />);
}

export default Component;
