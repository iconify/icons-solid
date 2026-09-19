import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1bbndrsh.css';
import '../../css/c/c6y1s8ces.css';
import '../../css/o/o4x2yi1vx.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="j1bbndrsh"><path clip-rule="evenodd" class="c6y1s8ces"/><path class="o4x2yi1vx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:eye-1-outline"} {...others} />);
}

export default Component;
