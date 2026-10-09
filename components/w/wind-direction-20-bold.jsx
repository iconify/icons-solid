import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpj3_ybqz.css';
import '../../css/w/wec04pbcz.css';
import '../../css/o/ota_86bus.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kpj3_ybqz"/><path class="wec04pbcz"/><path class="ota_86bus"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-direction-20-bold"} {...others} />);
}

export default Component;
