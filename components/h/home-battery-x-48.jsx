import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js4ro1b0l.css';
import '../../css/y/y-afnmd_s.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="js4ro1b0l"/><path class="y-afnmd_s"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:home-battery-x-48"} {...others} />);
}

export default Component;
