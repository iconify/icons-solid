import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgk3uwbvd.css';
import '../../css/p/p0jpkgbuv.css';
import '../../css/h/hxuxb_bgp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wgk3uwbvd"/><path class="p0jpkgbuv"/><path class="hxuxb_bgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:scale-duotone"} {...others} />);
}

export default Component;
