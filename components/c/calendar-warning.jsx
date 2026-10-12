import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnk4urbac.css';
import '../../css/v/v1odcqarg.css';
import '../../css/i/ib58-zslp.css';
import '../../css/l/lpka66bfm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="vnk4urbac"/><rect class="v1odcqarg"/><path class="ib58-zslp"/><path class="lpka66bfm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:calendar-warning"} {...others} />);
}

export default Component;
