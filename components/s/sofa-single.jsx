import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kz-2l07lp.css';
import '../../css/y/y5xl-gbup.css';
import '../../css/y/y1pnovgss.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kz-2l07lp"/><path class="y5xl-gbup"/><path class="y1pnovgss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sofa-single"} {...others} />);
}

export default Component;
