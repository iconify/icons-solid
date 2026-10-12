import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p38l2gb7c.css';
import '../../css/o/ojlv26udd.css';
import '../../css/u/um4dfwbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p38l2gb7c"/><path class="ojlv26udd"/><path class="um4dfwbkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:disc"} {...others} />);
}

export default Component;
