import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlxpyqbgk.css';
import '../../css/u/umey9qmui.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vlxpyqbgk"/><path class="umey9qmui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coins-20-bold"} {...others} />);
}

export default Component;
