import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdvwsb4jr.css';
import '../../css/y/ykg_8r5wn.css';
import '../../css/k/k0edr9b3l.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-outline clr-i-outline-path-1 hdvwsb4jr"/><path class="clr-i-outline clr-i-outline-path-2 ykg_8r5wn"/><path class="clr-i-outline clr-i-outline-path-3 k0edr9b3l"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:cloud-scale-line"} {...others} />);
}

export default Component;
