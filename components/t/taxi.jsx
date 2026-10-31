import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d76isc4xa.css';
import '../../css/x/x5o9c3b9k.css';
import '../../css/z/z1covxg5q.css';
import '../../css/k/kg722w7zm.css';
import '../../css/k/kltw9zi6r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="d76isc4xa wm-shadow"/><path class="wm-shadow x5o9c3b9k"/><path class="z1covxg5q"/><path class="kg722w7zm"/><path class="kltw9zi6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:taxi"} {...others} />);
}

export default Component;
