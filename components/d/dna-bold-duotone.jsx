import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9ur2oonl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/s/sux6gb5kr.css';
import '../../css/i/i7lz8ib8k.css';
import '../../css/w/wyl68z4wc.css';
import '../../css/e/eb_wx3r8r.css';
import '../../css/d/demos8bvs.css';
import '../../css/t/to-gcobus.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l9ur2oonl"/><g class="xtpeb-edw"><path class="sux6gb5kr"/><path class="i7lz8ib8k"/><path class="wyl68z4wc"/><path class="eb_wx3r8r"/><path class="demos8bvs"/><path class="to-gcobus"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dna-bold-duotone"} {...others} />);
}

export default Component;
