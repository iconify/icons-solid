import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nxju_n3um.css';
import '../../css/f/fow8b5buk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nxju_n3um"/><path class="fow8b5buk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:heatwave-48"} {...others} />);
}

export default Component;
