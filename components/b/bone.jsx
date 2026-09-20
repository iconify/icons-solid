import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd86l4b1p.css';
import '../../css/d/davv75zdr.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/x9_905d5w.css';
import '../../css/i/ifhbvbwfe.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hd86l4b1p"/><path class="davv75zdr"/><g class="jn8qy4bru"><path class="x9_905d5w"/><path class="ifhbvbwfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bone"} {...others} />);
}

export default Component;
