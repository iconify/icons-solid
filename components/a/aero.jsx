import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vo7oueb-q.css';
import '../../css/a/az8tspnvq.css';
import '../../css/d/dy6alobrx.css';

const viewBox = {"width":51.74,"height":70};
const content = `<g class="cuyn6tgcc"><path class="vo7oueb-q"/><path class="az8tspnvq"/><path class="dy6alobrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:aero"} {...others} />);
}

export default Component;
