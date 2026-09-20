import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/s9xy0ebzg.css';
import '../../css/j/j5xauwbke.css';
import '../../css/i/ir3krzgyh.css';

const viewBox = {"width":15,"height":15};
const content = `<g class="h01tyzbfu"><path class="s9xy0ebzg"/><path class="j5xauwbke"/><path class="ir3krzgyh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:toggle-outline"} {...others} />);
}

export default Component;
