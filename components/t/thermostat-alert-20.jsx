import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_vn9-b7l.css';
import '../../css/k/kj4xs5bkc.css';
import '../../css/g/gxky-sbxf.css';
import '../../css/o/o3qyi4q4j.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="g_vn9-b7l"/><path class="kj4xs5bkc"/><path class="gxky-sbxf"/><path class="o3qyi4q4j"/><path class="nq5_p_bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermostat-alert-20"} {...others} />);
}

export default Component;
