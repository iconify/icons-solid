import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p9tz_y6cx.css';
import '../../css/s/sx2yqebxa.css';
import '../../css/f/f5o0mhbgd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p9tz_y6cx"/><path class="sx2yqebxa"/><path class="f5o0mhbgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:warranty-badge-highlight"} {...others} />);
}

export default Component;
