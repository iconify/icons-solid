import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/oh053ab4q.css';
import '../../css/w/wl1f6ubih.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="h01tyzbfu"><path class="oh053ab4q"/><path class="wl1f6ubih"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:strawberry"} {...others} />);
}

export default Component;
