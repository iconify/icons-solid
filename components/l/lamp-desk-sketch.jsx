import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nadl88edg.css';
import '../../css/e/e-6vslbun.css';
import '../../css/k/k-9auubar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nadl88edg"/><path class="e-6vslbun"/><path class="k-9auubar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lamp-desk-sketch"} {...others} />);
}

export default Component;
