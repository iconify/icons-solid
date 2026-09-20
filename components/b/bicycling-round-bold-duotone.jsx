import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/naktjqyhr.css';
import '../../css/c/cune3rfiq.css';
import '../../css/h/httstt_8v.css';
import '../../css/l/ly0fd4b1i.css';
import '../../css/l/lyfl-t8ti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="naktjqyhr"/><path clip-rule="evenodd" class="cune3rfiq"/><g clip-rule="evenodd" class="httstt_8v"><path class="ly0fd4b1i"/><path class="lyfl-t8ti"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bicycling-round-bold-duotone"} {...others} />);
}

export default Component;
