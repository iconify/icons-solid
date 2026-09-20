import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/uz8x1objw.css';
import '../../css/y/yt8pvybck.css';
import '../../css/d/drmbseenh.css';
import '../../css/p/p433282pm.css';
import '../../css/y/y8k-8lb4b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="uz8x1objw"/><path class="yt8pvybck"/><path class="drmbseenh"/><path class="p433282pm"/><path class="y8k-8lb4b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:gas-station-fuel-petroleum"} {...others} />);
}

export default Component;
