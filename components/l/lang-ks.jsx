import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/w/w-8n40b6x.css';
import '../../css/h/hd4ys4eun.css';
import '../../css/m/mhqx3ubxk.css';
import '../../css/c/cpckgcb4o.css';
import '../../css/u/uadr1cccd.css';
import '../../css/s/sk-9y1x_z.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="w-8n40b6x"/><path class="hd4ys4eun"/><path class="mhqx3ubxk"/><circle class="cpckgcb4o"/><circle class="uadr1cccd"/><path class="sk-9y1x_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-ks"} {...others} />);
}

export default Component;
