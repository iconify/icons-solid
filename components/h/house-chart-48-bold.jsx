import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxvnz_b5x.css';
import '../../css/h/h8trvnbox.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uxvnz_b5x"/><path class="h8trvnbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-chart-48-bold"} {...others} />);
}

export default Component;
