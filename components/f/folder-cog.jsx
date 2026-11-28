import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fl-0a40mh.css';
import '../../css/y/yz2qrhb-p.css';
import '../../css/u/um_7tjb3r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="fl-0a40mh"/><path class="yz2qrhb-p"/><path class="um_7tjb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:folder-cog"} {...others} />);
}

export default Component;
