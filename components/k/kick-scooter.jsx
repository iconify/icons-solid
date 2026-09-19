import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yw6pirb0p.css';
import '../../css/w/w624gabkq.css';
import '../../css/a/avjgxm8yh.css';
import '../../css/f/fz0a1-bzf.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="yw6pirb0p"/><path class="w624gabkq"/><path class="avjgxm8yh"/><path class="fz0a1-bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:kick-scooter"} {...others} />);
}

export default Component;
