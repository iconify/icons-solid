import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zg5a7jb0o.css';
import '../../css/h/h6f3a38bp.css';
import '../../css/g/g02vaqb7b.css';
import '../../css/y/ygtalcb8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zg5a7jb0o"/><path class="h6f3a38bp wm-k"/><path class="g02vaqb7b wm-k"/><path class="wm-a ygtalcb8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lightbulb-sketch"} {...others} />);
}

export default Component;
