import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b556pqxyw.css';
import '../../css/l/l3hxi7bhe.css';
import '../../css/y/y7mxs0lsz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b556pqxyw"/><path class="l3hxi7bhe"/><path class="y7mxs0lsz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:speedometer-outline"} {...others} />);
}

export default Component;
