import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/d/dk3p2vl6p.css';
import '../../css/u/ua41kvbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="lx_j5lb4z"/><circle transform="rotate(90 12 12)" class="mpf1g8bav"/><path class="dk3p2vl6p"/><path class="ua41kvbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:help"} {...others} />);
}

export default Component;
