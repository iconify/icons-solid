import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yt58n6j6w.css';
import '../../css/m/myjee8b0b.css';
import '../../css/c/cqr0ngbfu.css';
import '../../css/n/n72fxw10p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="yt58n6j6w"/><path class="myjee8b0b"/><path class="cqr0ngbfu"/><path class="n72fxw10p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:flashlight-line-duotone"} {...others} />);
}

export default Component;
