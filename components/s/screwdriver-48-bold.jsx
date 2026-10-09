import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqoigh7pk.css';
import '../../css/c/cwlq3hbmh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hqoigh7pk"/><path class="cwlq3hbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:screwdriver-48-bold"} {...others} />);
}

export default Component;
