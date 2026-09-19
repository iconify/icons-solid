import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o3x7n9lzn.css';
import '../../css/a/akqn6ybtj.css';
import '../../css/l/l8hdyejxo.css';
import '../../css/t/tgs0vfz_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="o3x7n9lzn"/><path class="akqn6ybtj"/><path class="l8hdyejxo"/><path class="tgs0vfz_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:hologram"} {...others} />);
}

export default Component;
