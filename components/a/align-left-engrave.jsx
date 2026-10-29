import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ejopvybvf.css';
import '../../css/n/n-xoksf_a.css';
import '../../css/k/k6v14padp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ejopvybvf"/><path class="n-xoksf_a wm-shadow"/><path class="k6v14padp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-left-engrave"} {...others} />);
}

export default Component;
