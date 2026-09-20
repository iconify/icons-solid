import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hc5d41b9j.css';
import '../../css/t/tq7ay0l2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hc5d41b9j"/><path class="tq7ay0l2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-progress-check-two-tone"} {...others} />);
}

export default Component;
