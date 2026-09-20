import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aljnsoips.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="aljnsoips"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-wayfinder-stairs-1-stairs-staircase-right"} {...others} />);
}

export default Component;
