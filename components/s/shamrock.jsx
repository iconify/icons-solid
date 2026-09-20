import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzjlihbdq.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jomn23bik.css';
import '../../css/w/w0g0foxru.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lzjlihbdq"/><g class="jn8qy4bru"><path class="jomn23bik"/><path class="w0g0foxru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shamrock"} {...others} />);
}

export default Component;
