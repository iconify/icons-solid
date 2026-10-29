import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/krwaskb4k.css';
import '../../css/j/j8pt22lgn.css';
import '../../css/p/p315kqhvz.css';
import '../../css/b/b25ralmkw.css';
import '../../css/f/fpe-trb0t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="krwaskb4k"/><path class="j8pt22lgn wm-k"/><path class="p315kqhvz wm-s"/><path class="b25ralmkw wm-k"/><path class="fpe-trb0t wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-clock-sketch"} {...others} />);
}

export default Component;
