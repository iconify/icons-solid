import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dmv_memyb.css';
import '../../css/l/ly_xorbhf.css';
import '../../css/g/g-tbc_bos.css';
import '../../css/i/i_ci1z0yz.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="d2kvgvbvc"><path class="dmv_memyb"/><path class="ly_xorbhf"/><path class="g-tbc_bos"/><path class="i_ci1z0yz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:lc-1x1"} {...others} />);
}

export default Component;
