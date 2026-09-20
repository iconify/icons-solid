import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gypo4-b5z.css';
import '../../css/l/lgp-8qlsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gypo4-b5z"/><path class="lgp-8qlsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:bar-chart-2-down-two-tone"} {...others} />);
}

export default Component;
