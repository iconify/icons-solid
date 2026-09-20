import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wlk7cymyb.css';
import '../../css/m/mio52ig2b.css';
import '../../css/y/yh3pvrblm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wlk7cymyb"/><circle class="mio52ig2b"/><path class="yh3pvrblm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:users-round"} {...others} />);
}

export default Component;
