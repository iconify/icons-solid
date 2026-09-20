import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dc9lci3fy.css';
import '../../css/a/ao17a7bdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dc9lci3fy"/><path class="ao17a7bdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-speaker"} {...others} />);
}

export default Component;
