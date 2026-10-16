import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/skm13gbpu.css';
import '../../css/q/qt_17gbik.css';
import '../../css/g/g_wuh4bxx.css';
import '../../css/n/nq5_p_bzp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="skm13gbpu"/><path class="qt_17gbik"/><path class="g_wuh4bxx"/><path class="nq5_p_bzp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-farm-alert-20"} {...others} />);
}

export default Component;
