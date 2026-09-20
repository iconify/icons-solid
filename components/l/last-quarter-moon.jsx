import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4_qs971a.css';
import '../../css/u/urgfwxboa.css';
import '../../css/s/sfanizbyl.css';
import '../../css/p/pr2tmsbpy.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/usozxnbrm.css';
import '../../css/h/hwzxxondw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="m4_qs971a"/><path class="urgfwxboa"/><path class="sfanizbyl"/><path class="pr2tmsbpy"/><g class="jn8qy4bru"><circle class="usozxnbrm"/><path class="hwzxxondw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:last-quarter-moon"} {...others} />);
}

export default Component;
