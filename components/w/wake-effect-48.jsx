import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_4l3dbra.css';
import '../../css/r/r5t_d6bdj.css';
import '../../css/m/m9x6imbjk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z_4l3dbra"/><path class="r5t_d6bdj"/><path class="m9x6imbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wake-effect-48"} {...others} />);
}

export default Component;
