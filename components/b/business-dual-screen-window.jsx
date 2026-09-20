import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/y/yt3u_9wzn.css';
import '../../css/s/s4s-ne9iv.css';
import '../../css/s/sf6m80b_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="yt3u_9wzn"/><path class="s4s-ne9iv"/><path class="sf6m80b_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-dual-screen-window"} {...others} />);
}

export default Component;
