import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/h/hd_r6sdbz.css';
import '../../css/i/ix8cskbcl.css';
import '../../css/z/z4e6-1p3b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="hd_r6sdbz"/><path class="ix8cskbcl"/><path class="z4e6-1p3b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clapperboard-text-line-duotone"} {...others} />);
}

export default Component;
