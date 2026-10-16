import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/km2fl-ght.css';
import '../../css/f/fk5-7tb4v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="km2fl-ght"/><path class="fk5-7tb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chart-duration-curve-20"} {...others} />);
}

export default Component;
