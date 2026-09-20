import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t2i8h7vmr.css';
import '../../css/r/rhi6q16-e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t2i8h7vmr"/><path class="rhi6q16-e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bar-chart-2-horizontal-start-two-tone"} {...others} />);
}

export default Component;
