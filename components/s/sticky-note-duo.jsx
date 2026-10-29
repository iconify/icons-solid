import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/t-5wpjwof.css';
import '../../css/o/o8mkkgbix.css';
import '../../css/c/c4_v7i59t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="t-5wpjwof"/><path class="o8mkkgbix wm-a"/><path class="c4_v7i59t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sticky-note-duo"} {...others} />);
}

export default Component;
