import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhj96-tym.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uhj96-tym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:acid-rain-20"} {...others} />);
}

export default Component;
