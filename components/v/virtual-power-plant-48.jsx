import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya-i-fb_p.css';
import '../../css/x/xl9astbne.css';
import '../../css/h/hzypfodab.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ya-i-fb_p"/><path class="xl9astbne"/><path class="hzypfodab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:virtual-power-plant-48"} {...others} />);
}

export default Component;
