import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p270hkbyv.css';
import '../../css/l/l9etfhdic.css';
import '../../css/r/r1ehujbqp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p270hkbyv"/><path class="l9etfhdic"/><path class="r1ehujbqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ground-mount-48"} {...others} />);
}

export default Component;
