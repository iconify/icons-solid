import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/p4loazbkt.css';
import '../../css/v/v61sqybyj.css';
import '../../css/i/i5h3wzb6z.css';
import '../../css/w/wohwviwqc.css';
import '../../css/q/qr4ochb5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="p4loazbkt wm-shadow"/><path class="v61sqybyj wm-k"/><path class="i5h3wzb6z wm-k"/><path class="wm-k wohwviwqc"/><path class="qr4ochb5c wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lightbulb-off-engrave"} {...others} />);
}

export default Component;
