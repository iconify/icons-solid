import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fvdgcacqf.css';
import '../../css/t/tv9-0gble.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="fvdgcacqf"/><path clip-rule="evenodd" class="tv9-0gble"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:light-switch-bold"} {...others} />);
}

export default Component;
