import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iwec2sbdf.css';
import '../../css/y/y-okkubvq.css';
import '../../css/u/ubuzbfdqc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iwec2sbdf"/><path class="y-okkubvq"/><path clip-rule="evenodd" class="ubuzbfdqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:pregnant-32w-outline"} {...others} />);
}

export default Component;
