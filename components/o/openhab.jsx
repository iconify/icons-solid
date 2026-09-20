import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt4y2qbvi.css';
import '../../css/v/vl-s6tbeg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wt4y2qbvi"/><path class="vl-s6tbeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openhab"} {...others} />);
}

export default Component;
