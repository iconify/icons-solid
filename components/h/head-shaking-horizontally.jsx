import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipnkxrb8f.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/fhxx06rev.css';
import '../../css/m/mn1g5za9c.css';
import '../../css/u/u61sssbxb.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="ipnkxrb8f"/><g class="jn8qy4bru"><path class="fhxx06rev"/><path class="mn1g5za9c"/><path class="u61sssbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:head-shaking-horizontally"} {...others} />);
}

export default Component;
