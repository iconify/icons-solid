import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e2ea05ihx.css';
import '../../css/v/vly0h-b7p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e2ea05ihx"/><path class="vly0h-b7p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-progress-three-quarter-two-tone"} {...others} />);
}

export default Component;
