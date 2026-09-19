import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iy-sd1yvj.css';
import '../../css/p/pix652y1y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iy-sd1yvj"/><path class="pix652y1y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:shield-half-outline"} {...others} />);
}

export default Component;
