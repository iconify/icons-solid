import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0dsan2jy.css';
import '../../css/q/q4i1mm1-a.css';
import '../../css/t/tqnz3b5ap.css';
import '../../css/d/dahalbmwa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h0dsan2jy wm-k"/><path class="q4i1mm1-a wm-k"/><path class="tqnz3b5ap wm-a"/><path class="dahalbmwa wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:images"} {...others} />);
}

export default Component;
