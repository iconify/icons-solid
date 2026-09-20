import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1z-x8bgg.css';
import '../../css/d/da4op8ghx.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="ft5dv1b6b"><path class="j1z-x8bgg"/><path class="da4op8ghx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:termux"} {...others} />);
}

export default Component;
