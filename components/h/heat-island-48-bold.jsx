import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m810bccve.css';
import '../../css/s/s4bn_vbze.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m810bccve"/><path class="s4bn_vbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heat-island-48-bold"} {...others} />);
}

export default Component;
