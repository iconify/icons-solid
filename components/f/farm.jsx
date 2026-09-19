import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/we5eze0cw.css';
import '../../css/q/qmnaebbzc.css';
import '../../css/i/icj2onb3b.css';
import '../../css/y/y7u-8kb4y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="we5eze0cw"/><path class="qmnaebbzc"/><path class="icj2onb3b"/><path class="y7u-8kb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:farm"} {...others} />);
}

export default Component;
