import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnzn_vsno.css';
import '../../css/v/vl-e_fb9f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dnzn_vsno"/><path class="vl-e_fb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:antenna-48"} {...others} />);
}

export default Component;
