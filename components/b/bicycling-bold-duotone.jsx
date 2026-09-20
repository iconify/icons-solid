import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ac5s9ccyr.css';
import '../../css/f/fu_tyd8hl.css';
import '../../css/h/httstt_8v.css';
import '../../css/l/ly0fd4b1i.css';
import '../../css/l/lyfl-t8ti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ac5s9ccyr"/><path clip-rule="evenodd" class="fu_tyd8hl"/><g clip-rule="evenodd" class="httstt_8v"><path class="ly0fd4b1i"/><path class="lyfl-t8ti"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bicycling-bold-duotone"} {...others} />);
}

export default Component;
