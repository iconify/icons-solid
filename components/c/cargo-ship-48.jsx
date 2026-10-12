import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cw0_76buw.css';
import '../../css/d/d22vebp3d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cw0_76buw"/><path class="d22vebp3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-ship-48"} {...others} />);
}

export default Component;
