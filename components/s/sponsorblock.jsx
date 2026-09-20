import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m501iv-7c.css';
import '../../css/d/ddz586lyl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m501iv-7c"/><path class="ddz586lyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sponsorblock"} {...others} />);
}

export default Component;
