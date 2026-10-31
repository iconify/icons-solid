import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sudg71c6u.css';
import '../../css/l/l39i1pkyb.css';
import '../../css/c/cgvibbbrh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="sudg71c6u wm-shadow"/><path class="l39i1pkyb wm-shadow"/><path class="cgvibbbrh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:anchor"} {...others} />);
}

export default Component;
