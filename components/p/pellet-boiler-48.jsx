import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vghbbfb2f.css';
import '../../css/p/pw56fm25u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vghbbfb2f"/><path class="pw56fm25u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pellet-boiler-48"} {...others} />);
}

export default Component;
