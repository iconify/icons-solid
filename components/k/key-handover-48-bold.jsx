import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtbad_v3a.css';
import '../../css/z/zlmlrhbpp.css';
import '../../css/w/w_ns1hbzc.css';
import '../../css/n/nhv_i6bfk.css';
import '../../css/v/vra7nyw8z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vtbad_v3a"/><path class="zlmlrhbpp"/><path class="w_ns1hbzc"/><path class="nhv_i6bfk"/><path class="vra7nyw8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-handover-48-bold"} {...others} />);
}

export default Component;
