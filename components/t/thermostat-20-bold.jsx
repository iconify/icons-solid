import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0oa-qzdz.css';
import '../../css/v/vdi-4w12d.css';
import '../../css/v/v-w5pabfp.css';
import '../../css/v/vv_vc2byo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c0oa-qzdz"/><path class="vdi-4w12d"/><path class="v-w5pabfp"/><path class="vv_vc2byo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermostat-20-bold"} {...others} />);
}

export default Component;
