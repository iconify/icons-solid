import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qlaoi1bsp.css';
import '../../css/p/p3ugz7wqs.css';
import '../../css/b/b82dfnb_o.css';
import '../../css/j/jmo57ab0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qlaoi1bsp wm-k"/><path class="p3ugz7wqs wm-shadow"/><path class="b82dfnb_o wm-k"/><path class="jmo57ab0a wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:octagon-x-engrave"} {...others} />);
}

export default Component;
