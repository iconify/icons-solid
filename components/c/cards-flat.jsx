import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pyj8x5bwy.css';
import '../../css/p/pp-w--bzw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pyj8x5bwy"/><path class="pp-w--bzw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cards-flat"} {...others} />);
}

export default Component;
