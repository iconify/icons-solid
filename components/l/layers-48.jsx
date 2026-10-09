import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciarmei3k.css';
import '../../css/n/nafa54a1z.css';
import '../../css/o/ofvhr7lmd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ciarmei3k"/><path class="nafa54a1z"/><path class="ofvhr7lmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:layers-48"} {...others} />);
}

export default Component;
