import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wz0rp_ekf.css';
import '../../css/p/pf1_oxqio.css';
import '../../css/l/lfesz3put.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="wz0rp_ekf"/><path class="pf1_oxqio"/><path class="lfesz3put"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-yield"} {...others} />);
}

export default Component;
