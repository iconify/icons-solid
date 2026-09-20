import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hxu_bbcsk.css';
import '../../css/g/g4o-ggzfa.css';
import '../../css/w/w2-buabqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hxu_bbcsk"/><path class="g4o-ggzfa"/><path class="w2-buabqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:umbrella-bold"} {...others} />);
}

export default Component;
