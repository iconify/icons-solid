import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxk4r1_gb.css';
import '../../css/b/bfgj_tbvh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gxk4r1_gb"/><path class="bfgj_tbvh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vpn-sentinel-light"} {...others} />);
}

export default Component;
