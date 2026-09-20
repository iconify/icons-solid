import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ievw0_bxs.css';
import '../../css/x/x5oypsb1r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ievw0_bxs"/><path class="x5oypsb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:anticlockwise-triangle-headed-top-u-shaped-arrow"} {...others} />);
}

export default Component;
