import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nw98m2b_y.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/t/th2d8e65k.css';
import '../../css/k/km8ej6bsu.css';
import '../../css/a/ap1vpl62u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nw98m2b_y"/><g class="brzn_0bpr"><path class="th2d8e65k"/><path class="km8ej6bsu"/><path class="ap1vpl62u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:thumbs-down-light-skin-tone"} {...others} />);
}

export default Component;
