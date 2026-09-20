import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kduu9pbdz.css';
import '../../css/x/xpct6_bqj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kduu9pbdz"/><path class="xpct6_bqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:css3-dark"} {...others} />);
}

export default Component;
