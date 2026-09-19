import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qyj0h7psz.css';
import '../../css/i/ir2_gtbej.css';
import '../../css/x/x2883_0ul.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="qyj0h7psz"/><path class="ir2_gtbej"/><path class="x2883_0ul"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:newspaper"} {...others} />);
}

export default Component;
