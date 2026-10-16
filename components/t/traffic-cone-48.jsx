import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rl79hl11f.css';
import '../../css/m/m2n9dacld.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="rl79hl11f"/><path class="m2n9dacld"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:traffic-cone-48"} {...others} />);
}

export default Component;
