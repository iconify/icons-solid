import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y42lu3wgl.css';
import '../../css/e/e3mqktbid.css';
import '../../css/f/fzsrnccdv.css';
import '../../css/n/n56pybc1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k y42lu3wgl"/><path class="e3mqktbid wm-k"/><path class="fzsrnccdv wm-k"/><path class="n56pybc1x wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:trending-up"} {...others} />);
}

export default Component;
