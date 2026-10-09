import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/thsmnl_1a.css';
import '../../css/h/hspx3ob0u.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="thsmnl_1a"/><path class="hspx3ob0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bowling-48-bold"} {...others} />);
}

export default Component;
