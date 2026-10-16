import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fif1fofps.css';
import '../../css/k/kj_8dbkmk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fif1fofps"/><path class="kj_8dbkmk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:monopole-pylon-48-bold"} {...others} />);
}

export default Component;
