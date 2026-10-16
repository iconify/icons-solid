import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fc4olvb8c.css';
import '../../css/e/el8rvydxl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fc4olvb8c"/><path class="el8rvydxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:current-transformer-48"} {...others} />);
}

export default Component;
