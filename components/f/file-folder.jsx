import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwzl1fkot.css';
import '../../css/m/mye8w2bqk.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/nzou8ob_j.css';
import '../../css/d/dq091-iyu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cwzl1fkot"/><path class="mye8w2bqk"/><g class="jn8qy4bru"><path class="nzou8ob_j"/><path class="dq091-iyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:file-folder"} {...others} />);
}

export default Component;
