import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a23d2obbm.css';
import '../../css/g/gj72yxbju.css';
import '../../css/x/xpke-abpq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="a23d2obbm"/><path clip-rule="evenodd" class="gj72yxbju"/><path class="xpke-abpq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:timer-fast-bold"} {...others} />);
}

export default Component;
