import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um_si5o0k.css';
import '../../css/w/w755xk_8f.css';
import '../../css/n/nw4h7ac-q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="um_si5o0k"><path class="w755xk_8f"/><path class="nw4h7ac-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:otne"} {...others} />);
}

export default Component;
