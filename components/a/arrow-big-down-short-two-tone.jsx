import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n03itsb0r.css';
import '../../css/k/krgpyebuh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="n03itsb0r"/><path class="krgpyebuh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-big-down-short-two-tone"} {...others} />);
}

export default Component;
