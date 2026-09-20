import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuf42lb8e.css';
import '../../css/w/w4s_915po.css';
import '../../css/j/jo_-me8ej.css';
import '../../css/g/gr7z1enan.css';

const viewBox = {"width":1146,"height":1117};
const content = `<g class="kuf42lb8e"><path class="w4s_915po"/><path class="jo_-me8ej"/><path class="gr7z1enan"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:animate"} {...others} />);
}

export default Component;
