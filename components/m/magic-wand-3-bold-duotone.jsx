import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/pih3221qt.css';
import '../../css/c/c3iyeebaf.css';
import '../../css/r/r03geaczj.css';
import '../../css/x/x0524kbeg.css';
import '../../css/j/jtqo9f0fk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="pih3221qt"/><path class="c3iyeebaf"/><path class="r03geaczj"/><path class="x0524kbeg"/></g><path class="jtqo9f0fk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-wand-3-bold-duotone"} {...others} />);
}

export default Component;
