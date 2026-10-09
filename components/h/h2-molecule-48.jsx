import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi3t4znbv.css';
import '../../css/y/ynnkx3bur.css';
import '../../css/f/fextw-bxj.css';
import '../../css/q/qv_lb8s5d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yi3t4znbv"/><path class="ynnkx3bur"/><path class="fextw-bxj"/><path class="qv_lb8s5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:h2-molecule-48"} {...others} />);
}

export default Component;
