import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/v/vrx6sqdcz.css';
import '../../css/k/k4_xpnbow.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="vrx6sqdcz"/><path class="k4_xpnbow"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:location-pin"} {...others} />);
}

export default Component;
