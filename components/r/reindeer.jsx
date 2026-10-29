import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rc0kbryqd.css';
import '../../css/d/dotjycc0u.css';
import '../../css/y/yfxn1gspb.css';
import '../../css/c/c39ob_btd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="rc0kbryqd wm-k"/><path class="dotjycc0u wm-s"/><path class="yfxn1gspb"/><path class="c39ob_btd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:reindeer"} {...others} />);
}

export default Component;
