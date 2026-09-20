import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e65d03r4b.css';
import '../../css/w/wf5qbmvas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e65d03r4b"/><path class="wf5qbmvas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-pen-two-tone"} {...others} />);
}

export default Component;
