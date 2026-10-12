import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhk2u_byh.css';
import '../../css/l/l6j-txiai.css';
import '../../css/w/w6sns4blb.css';
import '../../css/b/bht8vx5nu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zhk2u_byh"/><path class="l6j-txiai"/><path class="w6sns4blb"/><path class="bht8vx5nu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pressure-gauge-48"} {...others} />);
}

export default Component;
