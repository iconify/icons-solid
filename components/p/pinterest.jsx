import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_5by1bgh.css';
import '../../css/h/hckr-tb6h.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="b_5by1bgh"/><path class="hckr-tb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pinterest"} {...others} />);
}

export default Component;
