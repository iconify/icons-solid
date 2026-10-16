import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d3hqt2bju.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="d3hqt2bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crowbar-48"} {...others} />);
}

export default Component;
