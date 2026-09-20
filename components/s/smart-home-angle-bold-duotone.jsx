import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cznruvbvt.css';
import '../../css/l/la8zw0-un.css';
import '../../css/r/rtss7cadq.css';
import '../../css/y/y37_nkb_p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="cznruvbvt"/><path class="la8zw0-un"/><path class="rtss7cadq"/><path class="y37_nkb_p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:smart-home-angle-bold-duotone"} {...others} />);
}

export default Component;
