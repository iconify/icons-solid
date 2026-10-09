import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g81g92bif.css';
import '../../css/w/wrr9qib1n.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g81g92bif"/><path class="wrr9qib1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:charity-48"} {...others} />);
}

export default Component;
