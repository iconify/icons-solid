import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m566nq1yt.css';
import '../../css/f/f6yyft70l.css';
import '../../css/c/cc9go-21s.css';
import '../../css/n/nezhdcchh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m566nq1yt"/><path class="f6yyft70l"/><path class="cc9go-21s"/><path class="nezhdcchh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:satellite-bold-duotone"} {...others} />);
}

export default Component;
