import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhcegirck.css';
import '../../css/t/tvsgro1em.css';
import '../../css/d/drxr40zhq.css';
import '../../css/u/usf082bfs.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fmnajwb8e.css';
import '../../css/c/c3e7qe6ix.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="qhcegirck"/><path class="tvsgro1em"/><path class="drxr40zhq"/><path class="usf082bfs"/><g class="jn8qy4bru"><path class="fmnajwb8e"/><path class="c3e7qe6ix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:cityscape-at-dusk"} {...others} />);
}

export default Component;
