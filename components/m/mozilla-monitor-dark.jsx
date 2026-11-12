import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m18h498ob.css';
import '../../css/c/cpghrcrth.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m18h498ob"/><path class="cpghrcrth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mozilla-monitor-dark"} {...others} />);
}

export default Component;
