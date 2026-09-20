import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/j/jasi7548e.css';
import '../../css/i/i9c92e16s.css';
import '../../css/h/h9xjmkbrz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="jasi7548e"/><path class="i9c92e16s"/><path class="h9xjmkbrz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:search-visual"} {...others} />);
}

export default Component;
