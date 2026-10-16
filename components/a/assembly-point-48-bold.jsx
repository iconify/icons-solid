import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suxb2jj3d.css';
import '../../css/o/okbjcmbdu.css';
import '../../css/l/l9dwwj8lt.css';
import '../../css/o/ol66k46jk.css';
import '../../css/r/rfgq3ob8w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="suxb2jj3d"/><path class="okbjcmbdu"/><path class="l9dwwj8lt"/><path class="ol66k46jk"/><path class="rfgq3ob8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:assembly-point-48-bold"} {...others} />);
}

export default Component;
