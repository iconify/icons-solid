import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/k71kedpaw.css';
import '../../css/k/krer2skwe.css';
import '../../css/t/tq6-pqdhd.css';
import '../../css/b/b88gxzbev.css';
import '../../css/i/iib4vtwgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="k71kedpaw wm-k"/><path class="krer2skwe wm-a"/><path class="tq6-pqdhd wm-shadow"/><path class="b88gxzbev wm-k"/><path class="iib4vtwgi wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:radio-tower-engrave"} {...others} />);
}

export default Component;
