import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vifw3eb0i.css';
import '../../css/p/p9y9icnbb.css';
import '../../css/g/gg_xv4o4z.css';
import '../../css/h/h4eli7bat.css';
import '../../css/j/jxzmdxbhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vifw3eb0i wm-shadow"/><path class="p9y9icnbb wm-shadow"/><path class="gg_xv4o4z"/><path class="h4eli7bat"/><path class="jxzmdxbhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:quote"} {...others} />);
}

export default Component;
