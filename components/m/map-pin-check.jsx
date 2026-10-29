import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwmhdzbfm.css';
import '../../css/k/k6toh2bzu.css';
import '../../css/p/p8po2lugb.css';
import '../../css/m/mow-ugb-e.css';
import '../../css/w/w7tpdeb6o.css';
import '../../css/q/qi7b0ml0c.css';
import '../../css/f/fcqvh0i3o.css';
import '../../css/j/js1q_xw-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow wwmhdzbfm"/><path class="k6toh2bzu wm-k"/><path class="p8po2lugb wm-k"/><path class="mow-ugb-e wm-k"/><path class="w7tpdeb6o wm-k"/><path class="qi7b0ml0c wm-k"/><path class="fcqvh0i3o wm-shine"/><path class="js1q_xw-v wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:map-pin-check"} {...others} />);
}

export default Component;
