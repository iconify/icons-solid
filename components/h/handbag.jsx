import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mic2phbzf.css';
import '../../css/o/or-u6zr_e.css';
import '../../css/j/jd0my-7iu.css';
import '../../css/i/ivv_5yb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="mic2phbzf"/><path class="or-u6zr_e"/><path class="jd0my-7iu"/><path class="ivv_5yb9r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:handbag"} {...others} />);
}

export default Component;
