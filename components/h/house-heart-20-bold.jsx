import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coivkzecr.css';
import '../../css/i/i0zpy4bns.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="coivkzecr"/><path class="i0zpy4bns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:house-heart-20-bold"} {...others} />);
}

export default Component;
