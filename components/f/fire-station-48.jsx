import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st531kb5s.css';
import '../../css/e/etimskbbu.css';
import '../../css/r/rw1twdhke.css';
import '../../css/h/hp8bhknya.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="st531kb5s"/><path class="etimskbbu"/><path class="rw1twdhke"/><path class="hp8bhknya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fire-station-48"} {...others} />);
}

export default Component;
