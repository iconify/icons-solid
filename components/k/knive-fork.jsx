import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzsaiiblw.css';
import '../../css/f/fp56qruxy.css';
import '../../css/q/q5ib2xb9z.css';
import '../../css/x/xyps7cbjg.css';
import '../../css/y/ydwzs1jqt.css';
import '../../css/f/fr-6pqe2i.css';
import '../../css/n/npxsi1bzj.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gzsaiiblw"/><path clip-rule="evenodd" class="fp56qruxy"/><path clip-rule="evenodd" class="q5ib2xb9z"/><path class="xyps7cbjg"/><path class="ydwzs1jqt"/><path class="fr-6pqe2i"/><path clip-rule="evenodd" class="npxsi1bzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-print:knive-fork"} {...others} />);
}

export default Component;
