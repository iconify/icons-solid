import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oepi3hb8j.css';
import '../../css/m/mvcr2gb0y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oepi3hb8j"/><path class="mvcr2gb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-speed-48"} {...others} />);
}

export default Component;
