import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uh277m_ob.css';
import '../../css/k/k5urdq7-q.css';
import '../../css/i/iariqbc-u.css';
import '../../css/x/xtvv9kb3o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="uh277m_ob"/><path class="k5urdq7-q"/><path class="iariqbc-u"/><path class="xtvv9kb3o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:lightbulb-sparkle"} {...others} />);
}

export default Component;
