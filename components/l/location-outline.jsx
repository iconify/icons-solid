import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/th5jkovxy.css';
import '../../css/r/r-89_xbkf.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="th5jkovxy"/><path class="r-89_xbkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:location-outline"} {...others} />);
}

export default Component;
