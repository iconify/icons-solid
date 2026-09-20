import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/voay2fb_x.css';
import '../../css/l/l-hb7_w0z.css';
import '../../css/h/h5aevgb_l.css';
import '../../css/m/mjh1mwb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="voay2fb_x"/><path class="l-hb7_w0z"/><path class="h5aevgb_l"/><path clip-rule="evenodd" class="mjh1mwb1q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-wifi-outline"} {...others} />);
}

export default Component;
