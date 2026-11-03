import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0y0jybnh.css';
import '../../css/h/h91eph6ti.css';
import '../../css/r/r5-izebii.css';
import '../../css/a/aisx3eswk.css';
import '../../css/h/hyiu_1qyb.css';

const viewBox = {"width":300,"height":100};
const content = `<g transform="translate(31.24 -1859.803)scale(1.06307)" class="d0y0jybnh"><rect class="h91eph6ti"/><g class="r5-izebii"><path class="aisx3eswk"/><path class="hyiu_1qyb"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rss-bridge"} {...others} />);
}

export default Component;
