import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twkhdebna.css';
import '../../css/n/n63jug8iu.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="twkhdebna"/><path class="n63jug8iu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-pen-48"} {...others} />);
}

export default Component;
