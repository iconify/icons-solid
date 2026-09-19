import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/m/mhks76b_b.css';
import '../../css/u/ukl881ban.css';
import '../../css/r/rirn0xbcx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><circle class="mhks76b_b"/><path class="ukl881ban"/><path class="rirn0xbcx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pen-tool-01"} {...others} />);
}

export default Component;
