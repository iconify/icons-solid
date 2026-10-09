import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/psdyb3bve.css';
import '../../css/n/neg1e0pbo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="psdyb3bve"/><path class="neg1e0pbo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:airplay-48-bold"} {...others} />);
}

export default Component;
