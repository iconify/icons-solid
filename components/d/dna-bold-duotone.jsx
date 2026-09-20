import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4c8mac9i.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/s/sux6gb5kr.css';
import '../../css/i/i7lz8ib8k.css';
import '../../css/w/wyl68z4wc.css';
import '../../css/e/eb_wx3r8r.css';
import '../../css/d/demos8bvs.css';
import '../../css/y/yrki9f4cn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e4c8mac9i"/><g class="mc2zb0bvp"><path class="sux6gb5kr"/><path class="i7lz8ib8k"/><path class="wyl68z4wc"/><path class="eb_wx3r8r"/><path class="demos8bvs"/><path class="yrki9f4cn"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dna-bold-duotone"} {...others} />);
}

export default Component;
