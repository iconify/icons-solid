import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4e0pebzc.css';
import '../../css/j/jtzjoi53s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="w4e0pebzc"/><path class="jtzjoi53s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:layout-1-duo"} {...others} />);
}

export default Component;
