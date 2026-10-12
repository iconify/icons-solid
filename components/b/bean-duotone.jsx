import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/psh_g_bzq.css';
import '../../css/g/g08jmodsg.css';
import '../../css/u/u7ubrjgxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="psh_g_bzq"/><path class="g08jmodsg"/><path class="u7ubrjgxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:bean-duotone"} {...others} />);
}

export default Component;
