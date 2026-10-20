import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eodp9ed2n.css';
import '../../css/r/rfdis-bgk.css';
import '../../css/p/pc88fcihq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eodp9ed2n"/><path class="rfdis-bgk"/><path class="pc88fcihq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:joystick-48"} {...others} />);
}

export default Component;
