import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w74_pkbuu.css';
import '../../css/x/xye5qqb6j.css';
import '../../css/o/om2raabrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w74_pkbuu wm-a"/><path class="xye5qqb6j"/><path class="om2raabrv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:audio-lines"} {...others} />);
}

export default Component;
