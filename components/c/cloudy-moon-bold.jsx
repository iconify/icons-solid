import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/odbq3cchx.css';
import '../../css/y/yfp8ofb5b.css';
import '../../css/j/jxlxz317g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="odbq3cchx"/><path class="yfp8ofb5b"/><path class="jxlxz317g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloudy-moon-bold"} {...others} />);
}

export default Component;
