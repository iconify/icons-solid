import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vnau-sb5b.css';
import '../../css/h/h63us4zvz.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="vnau-sb5b"/><path class="h63us4zvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:sailboat"} {...others} />);
}

export default Component;
