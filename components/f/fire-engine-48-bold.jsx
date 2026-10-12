import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aiecv_t_z.css';
import '../../css/w/wryrt8b-k.css';
import '../../css/c/cm6td6aoy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="aiecv_t_z"/><path class="wryrt8b-k"/><path class="cm6td6aoy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-engine-48-bold"} {...others} />);
}

export default Component;
