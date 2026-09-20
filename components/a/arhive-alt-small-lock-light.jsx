import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/tvwa76lwl.css';
import '../../css/r/r0l3wbbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="tvwa76lwl"/><path class="r0l3wbbwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:arhive-alt-small-lock-light"} {...others} />);
}

export default Component;
