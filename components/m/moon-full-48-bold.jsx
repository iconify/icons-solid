import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdlgrw2ra.css';
import '../../css/o/o91sag11f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pdlgrw2ra"/><path class="o91sag11f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-full-48-bold"} {...others} />);
}

export default Component;
