import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_spqu3na.css';
import '../../css/y/y5xx1ubma.css';
import '../../css/m/mjv9actef.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w_spqu3na"/><path class="y5xx1ubma"/><path class="mjv9actef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:navicon-round"} {...others} />);
}

export default Component;
