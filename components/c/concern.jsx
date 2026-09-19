import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/lt9927b3v.css';
import '../../css/x/x39rpxbik.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="h01tyzbfu"><path class="lt9927b3v"/><path class="x39rpxbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:concern"} {...others} />);
}

export default Component;
