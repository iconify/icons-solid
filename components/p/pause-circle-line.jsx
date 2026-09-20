import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c0ehh9xwr.css';
import '../../css/j/j-46ttn1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c0ehh9xwr"/><circle transform="matrix(-1 0 0 1 12 12)" class="j-46ttn1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:pause-circle-line"} {...others} />);
}

export default Component;
