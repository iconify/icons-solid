import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1psxwbwe.css';
import '../../css/d/de5deccyd.css';
import '../../css/c/cnbhp8aro.css';
import '../../css/h/hdgw87rbq.css';
import '../../css/t/t5yx02b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a1psxwbwe"/><path class="de5deccyd"/><path class="cnbhp8aro"/><path class="hdgw87rbq"/><path class="t5yx02b1e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:moon-fog-bold"} {...others} />);
}

export default Component;
