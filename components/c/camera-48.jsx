import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auuyt2boe.css';
import '../../css/n/nfapznoxi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="auuyt2boe"/><path class="nfapznoxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:camera-48"} {...others} />);
}

export default Component;
