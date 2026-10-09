import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvj4h6twa.css';
import '../../css/s/sy5tukbrx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lvj4h6twa"/><path class="sy5tukbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rivet-48"} {...others} />);
}

export default Component;
