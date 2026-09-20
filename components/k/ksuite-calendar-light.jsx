import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv4cxk5nj.css';
import '../../css/k/k09q8my-j.css';
import '../../css/n/nn1z1nbac.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gv4cxk5nj"/><path class="k09q8my-j"/><path class="nn1z1nbac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-calendar-light"} {...others} />);
}

export default Component;
