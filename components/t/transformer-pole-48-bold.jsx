import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chivyabpi.css';
import '../../css/u/u7007_xth.css';
import '../../css/h/h_ntzgbew.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="chivyabpi"/><path class="u7007_xth"/><path class="h_ntzgbew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:transformer-pole-48-bold"} {...others} />);
}

export default Component;
