import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtamu1bmy.css';
import '../../css/j/jpdg6tj0p.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path class="gtamu1bmy"/><path class="jpdg6tj0p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:box-close-bold"} {...others} />);
}

export default Component;
