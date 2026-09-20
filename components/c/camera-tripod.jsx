import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl-4wd_go.css';
import '../../css/m/mnt88sbtp.css';
import '../../css/l/lbjrzdqcz.css';
import '../../css/u/ua_ix6vpn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gl-4wd_go"/><path class="mnt88sbtp"/><path class="lbjrzdqcz"/><path class="ua_ix6vpn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:camera-tripod"} {...others} />);
}

export default Component;
