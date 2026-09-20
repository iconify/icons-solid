import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbtslwbod.css';
import '../../css/m/mox09ld7x.css';
import '../../css/m/m69xn3lry.css';
import '../../css/h/h4j_9sxig.css';
import '../../css/g/gd00f2zqj.css';
import '../../css/k/kp31uublc.css';
import '../../css/w/w4e45jbhe.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><path id="SVG8kBROeHk" class="jbtslwbod"/></defs><path class="mox09ld7x"/><path class="m69xn3lry"/><path class="h4j_9sxig"/><path class="gd00f2zqj"/><use href="#SVG8kBROeHk"/><use href="#SVG8kBROeHk"/><path class="kp31uublc"/><path class="w4e45jbhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:poultry-leg"} {...others} />);
}

export default Component;
