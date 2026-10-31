import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bk0mirbro.css';
import '../../css/g/g6_vs9ynd.css';
import '../../css/o/opmvrxb9o.css';
import '../../css/d/dnvwyvf3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bk0mirbro wm-shadow"/><path class="g6_vs9ynd wm-shadow"/><path class="opmvrxb9o"/><path class="dnvwyvf3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:microphone"} {...others} />);
}

export default Component;
