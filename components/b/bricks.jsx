import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nepy-emgn.css';
import '../../css/n/no24npb0h.css';
import '../../css/o/ojxthdcbq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="nepy-emgn"/><rect class="no24npb0h"/><path class="ojxthdcbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bricks"} {...others} />);
}

export default Component;
