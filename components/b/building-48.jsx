import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htkol23wy.css';
import '../../css/c/c682obb9l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="htkol23wy"/><path class="c682obb9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:building-48"} {...others} />);
}

export default Component;
