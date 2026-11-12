import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_v0fg13q.css';
import '../../css/i/ipzupvdvg.css';
import '../../css/n/nn1z1nbac.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_v0fg13q"/><path class="ipzupvdvg"/><path class="nn1z1nbac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-calendar-light"} {...others} />);
}

export default Component;
