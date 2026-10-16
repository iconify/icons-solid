import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8tgbj8rv.css';
import '../../css/g/glfmzd9iy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f8tgbj8rv"/><path class="glfmzd9iy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dry-cask-20-bold"} {...others} />);
}

export default Component;
