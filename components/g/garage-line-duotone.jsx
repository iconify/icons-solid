import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/t/ti-8hxbru.css';
import '../../css/g/gf8hoxv3z.css';
import '../../css/s/spvgpubdr.css';
import '../../css/g/gx380mbzb.css';
import '../../css/d/dwshg7bba.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="ti-8hxbru"/><path class="gf8hoxv3z"/><path class="spvgpubdr"/><path class="gx380mbzb"/><path class="dwshg7bba"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:garage-line-duotone"} {...others} />);
}

export default Component;
