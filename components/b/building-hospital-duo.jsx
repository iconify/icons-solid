import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ty2npnbqw.css';
import '../../css/s/sehlgo6kp.css';
import '../../css/b/b407_0b6g.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ty2npnbqw"/><path class="sehlgo6kp"/><path class="b407_0b6g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:building-hospital-duo"} {...others} />);
}

export default Component;
