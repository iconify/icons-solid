import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fy3kvnbub.css';
import '../../css/q/q_gqcab0j.css';
import '../../css/v/v-p6o8thf.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fy3kvnbub"/><path class="q_gqcab0j"/><path class="v-p6o8thf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-vertical-rectangle"} {...others} />);
}

export default Component;
