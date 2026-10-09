import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sop1nkb2y.css';
import '../../css/k/knt5gf6ty.css';
import '../../css/x/xq3w5ib_v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sop1nkb2y"/><path class="knt5gf6ty"/><path class="xq3w5ib_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:speaker-wifi-48-bold"} {...others} />);
}

export default Component;
