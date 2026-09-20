import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nb-40v-6s.css';
import '../../css/z/z2idmctjm.css';
import '../../css/l/l96efewzz.css';
import '../../css/l/l8lu4kgzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="nb-40v-6s"/><path clip-rule="evenodd" class="z2idmctjm"/><path class="l96efewzz"/><path class="l8lu4kgzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bomb-minimalistic-outline"} {...others} />);
}

export default Component;
