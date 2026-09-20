import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/waavsinzr.css';
import '../../css/j/jyo_x8rvu.css';
import '../../css/r/rx28kj1dq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="waavsinzr"/><path class="jyo_x8rvu"/><path class="rx28kj1dq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:invisible-1"} {...others} />);
}

export default Component;
