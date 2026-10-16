import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdlgrw2ra.css';
import '../../css/x/x-e0pwbux.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pdlgrw2ra"/><path class="x-e0pwbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:moon-half-48-bold"} {...others} />);
}

export default Component;
