import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/y4u_k6bek.css';
import '../../css/r/rwmee1boq.css';
import '../../css/u/uvg02h9rx.css';
import '../../css/j/jjivkrbpv.css';
import '../../css/x/xx-krhqrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco y4u_k6bek"/><path class="rwmee1boq wm-deco"/><path class="uvg02h9rx wm-deco"/><path class="jjivkrbpv wm-k"/><path class="wm-a xx-krhqrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cricket-blueprint"} {...others} />);
}

export default Component;
