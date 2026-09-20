import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/r/r0ao98w4y.css';
import '../../css/j/joky3n72o.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/i/i52n0_b3y.css';
import '../../css/l/l5vl9busa.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="r0ao98w4y"/><path class="joky3n72o"/></g><g class="ij2x_72vy"><path class="i52n0_b3y"/><path class="l5vl9busa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:department-store"} {...others} />);
}

export default Component;
