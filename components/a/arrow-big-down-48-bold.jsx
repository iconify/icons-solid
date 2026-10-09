import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/is8v6-bfl.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="is8v6-bfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-big-down-48-bold"} {...others} />);
}

export default Component;
