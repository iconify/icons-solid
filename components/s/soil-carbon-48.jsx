import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sz0wpbbiw.css';
import '../../css/v/vuwpiobog.css';
import '../../css/v/vvcbaxyiy.css';
import '../../css/q/qlqs7c5ek.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sz0wpbbiw"/><path class="vuwpiobog"/><path class="vvcbaxyiy"/><path class="qlqs7c5ek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:soil-carbon-48"} {...others} />);
}

export default Component;
