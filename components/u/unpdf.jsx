import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vug7t_0eo.css';
import '../../css/c/c9kkdsb8o.css';
import '../../css/f/fdwf6qbev.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="vug7t_0eo"/><path class="c9kkdsb8o"/><path class="fdwf6qbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:unpdf"} {...others} />);
}

export default Component;
