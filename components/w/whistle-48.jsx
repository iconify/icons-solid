import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pek7vnbxc.css';
import '../../css/y/ywj7khc9b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pek7vnbxc"/><path class="ywj7khc9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whistle-48"} {...others} />);
}

export default Component;
