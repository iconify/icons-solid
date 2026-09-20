import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q7ot8ryau.css';
import '../../css/o/oeb9303bc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q7ot8ryau"/><path class="oeb9303bc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:arrow-down-wide-narrow-two-tone"} {...others} />);
}

export default Component;
