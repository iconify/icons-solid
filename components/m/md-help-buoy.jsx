import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpgtxy_zq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="kpgtxy_zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-help-buoy"} {...others} />);
}

export default Component;
