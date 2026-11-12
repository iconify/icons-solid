import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xy_g6_bbi.css';
import '../../css/v/vxr1g-bus.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xy_g6_bbi"/><path class="vxr1g-bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:verdaccio-light"} {...others} />);
}

export default Component;
