import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f3c393b3p.css';
import '../../css/b/b2lnqy9tj.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="f3c393b3p"/><path class="b2lnqy9tj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:fried-egg-breakfast"} {...others} />);
}

export default Component;
