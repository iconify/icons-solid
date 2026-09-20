import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/ahvowobfe.css';
import '../../css/b/b3a5q61-y.css';
import '../../css/n/nc-22yz3n.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="jn8qy4bru"><path class="ahvowobfe"/><path class="b3a5q61-y"/><path class="nc-22yz3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:linked-paperclips"} {...others} />);
}

export default Component;
