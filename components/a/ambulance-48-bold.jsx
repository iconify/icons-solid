import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiecv_t_z.css';
import '../../css/w/wryrt8b-k.css';
import '../../css/f/f5yzw-ygz.css';
import '../../css/u/ulazcvbqa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aiecv_t_z"/><path class="wryrt8b-k"/><path class="f5yzw-ygz"/><path class="ulazcvbqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ambulance-48-bold"} {...others} />);
}

export default Component;
