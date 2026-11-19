import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fh6_i-49h.css';
import '../../css/i/irxb9mb4y.css';
import '../../css/p/p3p_7xbhq.css';
import '../../css/i/ijh_wmb2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fh6_i-49h"/><path class="irxb9mb4y"/><path class="p3p_7xbhq"/><path class="ijh_wmb2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:ice"} {...others} />);
}

export default Component;
