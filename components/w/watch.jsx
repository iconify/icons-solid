import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h7xnus5-e.css';
import '../../css/u/unefcsbmw.css';
import '../../css/a/anua2ob4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="h7xnus5-e"/><path class="unefcsbmw"/><path class="anua2ob4h wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:watch"} {...others} />);
}

export default Component;
