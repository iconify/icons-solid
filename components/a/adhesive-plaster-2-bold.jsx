import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r0hev40-z.css';
import '../../css/e/e2dg-bbng.css';
import '../../css/a/a3vwh6b2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="r0hev40-z"/><path clip-rule="evenodd" class="e2dg-bbng"/><path class="a3vwh6b2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-2-bold"} {...others} />);
}

export default Component;
