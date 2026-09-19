import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f1pnk2b_c.css';
import '../../css/s/sz77qabhw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="f1pnk2b_c"/><path clip-rule="evenodd" class="sz77qabhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-sanitizer-outline"} {...others} />);
}

export default Component;
