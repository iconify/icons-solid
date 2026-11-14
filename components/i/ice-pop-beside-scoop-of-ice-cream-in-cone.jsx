import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hglofqdlj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hglofqdlj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:ice-pop-beside-scoop-of-ice-cream-in-cone"} {...others} />);
}

export default Component;
