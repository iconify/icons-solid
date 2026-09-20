import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f9mf37bep.css';
import '../../css/l/lxvimfgoy.css';
import '../../css/k/k04p0xb8w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="f9mf37bep"/><path class="lxvimfgoy"/><path class="k04p0xb8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:point-on-map-perspective-line-duotone"} {...others} />);
}

export default Component;
