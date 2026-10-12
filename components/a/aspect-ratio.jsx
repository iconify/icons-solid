import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y14qgdb3u.css';
import '../../css/w/wf45hab5t.css';
import '../../css/p/pqptd0foq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 0 21.34)scale(-1 1)" class="y14qgdb3u"/><rect transform="rotate(90 0 21.34)scale(-1 1)" class="wf45hab5t"/><path class="pqptd0foq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:aspect-ratio"} {...others} />);
}

export default Component;
