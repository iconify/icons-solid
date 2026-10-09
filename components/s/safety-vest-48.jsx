import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svbqxwb3h.css';
import '../../css/x/x2jvtbbvl.css';
import '../../css/h/hp7pi0p4r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="svbqxwb3h"/><path class="x2jvtbbvl"/><path class="hp7pi0p4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:safety-vest-48"} {...others} />);
}

export default Component;
