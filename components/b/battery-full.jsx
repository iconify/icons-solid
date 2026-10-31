import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tn8ic7bdh.css';
import '../../css/p/p7_8ibche.css';
import '../../css/g/g_iozjbjh.css';
import '../../css/x/xoj0g-b6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tn8ic7bdh wm-shadow"/><path class="p7_8ibche wm-shadow"/><path class="g_iozjbjh"/><path class="xoj0g-b6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:battery-full"} {...others} />);
}

export default Component;
