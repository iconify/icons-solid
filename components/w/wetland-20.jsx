import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo8y3gbsq.css';
import '../../css/e/evqm7b8sn.css';
import '../../css/j/jop4h09dw.css';
import '../../css/q/qy1qx3bpf.css';
import '../../css/m/m_4azxl5z.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="eo8y3gbsq"/><path class="evqm7b8sn"/><path class="jop4h09dw"/><path class="qy1qx3bpf"/><path class="m_4azxl5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wetland-20"} {...others} />);
}

export default Component;
