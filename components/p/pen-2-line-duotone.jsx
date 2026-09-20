import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t-d1zfbuf.css';
import '../../css/y/yseolwzdu.css';
import '../../css/w/wxyd3lb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t-d1zfbuf"/><path class="yseolwzdu"/><path class="wxyd3lb1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-2-line-duotone"} {...others} />);
}

export default Component;
