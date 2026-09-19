import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qx1g21b5w.css';
import '../../css/y/y9kfqob_x.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="qx1g21b5w"/><path clip-rule="evenodd" class="y9kfqob_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sim-card-bold"} {...others} />);
}

export default Component;
