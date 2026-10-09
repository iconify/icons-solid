import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mv7_53bka.css';
import '../../css/m/m7ftp5n3b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="mv7_53bka"/><path class="m7ftp5n3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-thermal-48"} {...others} />);
}

export default Component;
