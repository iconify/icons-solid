import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vn03vccwq.css';
import '../../css/f/fgm9jt_mb.css';
import '../../css/w/w0_maub0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="vn03vccwq"/><path class="fgm9jt_mb"/><path class="w0_maub0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:work-update"} {...others} />);
}

export default Component;
