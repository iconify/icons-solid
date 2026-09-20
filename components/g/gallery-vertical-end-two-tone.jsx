import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/knf9qebnr.css';
import '../../css/p/psxymtgnv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="knf9qebnr"/><path class="psxymtgnv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:gallery-vertical-end-two-tone"} {...others} />);
}

export default Component;
