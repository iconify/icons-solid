import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/sv2-ifb9o.css';
import '../../css/a/a-eh_xukr.css';
import '../../css/b/b6yfg8beb.css';
import '../../css/h/h7zbgbb3u.css';
import '../../css/g/g1ucr3bmw.css';
import '../../css/i/ia8v3n7td.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="sv2-ifb9o wm-shadow"/><path class="a-eh_xukr"/><path class="b6yfg8beb"/><path class="h7zbgbb3u"/><path class="g1ucr3bmw"/><path class="ia8v3n7td"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:mail"} {...others} />);
}

export default Component;
