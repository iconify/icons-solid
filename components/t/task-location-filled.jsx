import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_hxwwbci.css';
import '../../css/u/urkgciarb.css';
import '../../css/s/s4vr5dbrf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_hxwwbci"/><path class="urkgciarb"/><path class="s4vr5dbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task-location-filled"} {...others} />);
}

export default Component;
