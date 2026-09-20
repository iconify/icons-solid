import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j70g4ermf.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/f/fae5zabey.css';
import '../../css/h/h7scsrb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j70g4ermf"/><g class="mc2zb0bvp"><path class="fae5zabey"/><path class="h7scsrb8x"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:station-minimalistic-bold-duotone"} {...others} />);
}

export default Component;
