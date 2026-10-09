import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/whsuzhbnb.css';
import '../../css/d/d8lq7obnz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="whsuzhbnb"/><path class="d8lq7obnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:corner-left-up-20"} {...others} />);
}

export default Component;
