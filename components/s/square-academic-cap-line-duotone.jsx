import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rjomr8bgz.css';
import '../../css/x/xjazw_bok.css';
import '../../css/u/ur_44xbhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="rjomr8bgz"/><path class="xjazw_bok"/><path class="ur_44xbhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-academic-cap-line-duotone"} {...others} />);
}

export default Component;
