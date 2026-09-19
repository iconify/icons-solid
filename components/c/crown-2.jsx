import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hzct7m1-u.css';
import '../../css/t/tam4kbb8n.css';
import '../../css/j/jwdsr96ax.css';
import '../../css/v/v3tf7wbjy.css';
import '../../css/n/nxa--qvcq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hzct7m1-u"/><path class="tam4kbb8n"/><path clip-rule="evenodd" class="jwdsr96ax"/><path class="v3tf7wbjy"/><path class="nxa--qvcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:crown-2"} {...others} />);
}

export default Component;
