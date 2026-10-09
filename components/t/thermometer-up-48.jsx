import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxju_n3um.css';
import '../../css/t/tyo480b-b.css';
import '../../css/o/o-4655baq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nxju_n3um"/><path class="tyo480b-b"/><path class="o-4655baq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:thermometer-up-48"} {...others} />);
}

export default Component;
