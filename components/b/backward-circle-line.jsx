import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j-46ttn1w.css';
import '../../css/u/uxh9_acgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle transform="matrix(-1 0 0 1 12 12)" class="j-46ttn1w"/><path class="uxh9_acgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:backward-circle-line"} {...others} />);
}

export default Component;
