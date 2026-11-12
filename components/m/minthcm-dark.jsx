import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipg2vo4ij.css';
import '../../css/k/k5qttyb_s.css';
import '../../css/g/g_ygldbdz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ipg2vo4ij"/><path class="k5qttyb_s"/><path class="g_ygldbdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minthcm-dark"} {...others} />);
}

export default Component;
