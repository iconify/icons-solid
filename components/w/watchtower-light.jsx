import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mj4sx_wkb.css';
import '../../css/v/vp08acc_f.css';
import '../../css/k/kpqed-bfm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mj4sx_wkb"/><path class="vp08acc_f"/><path class="kpqed-bfm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:watchtower-light"} {...others} />);
}

export default Component;
