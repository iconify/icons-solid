import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sulngtg2t.css';
import '../../css/n/nodw7zprb.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="sulngtg2t"/><path class="nodw7zprb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:directions-sign-bold"} {...others} />);
}

export default Component;
