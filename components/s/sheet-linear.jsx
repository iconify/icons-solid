import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hyvc97btq.css';
import '../../css/h/hm_s1kx4n.css';
import '../../css/y/y8umtvvdr.css';
import '../../css/z/z_9yqfbzq.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="hyvc97btq"/><path class="hm_s1kx4n"/><path class="y8umtvvdr"/><path class="z_9yqfbzq"/><path class="pw8f5c0fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sheet-linear"} {...others} />);
}

export default Component;
