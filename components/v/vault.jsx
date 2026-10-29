import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/o/o-c9ifdde.css';
import '../../css/r/r5i0t3b7x.css';
import '../../css/l/lo81-4blq.css';
import '../../css/t/tbrne-4tb.css';
import '../../css/r/r24v8ft4o.css';
import '../../css/v/v17pegbsy.css';
import '../../css/j/jsa556b4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="o-c9ifdde wm-shadow"/><path class="r5i0t3b7x"/><path class="lo81-4blq"/><path class="tbrne-4tb"/><path class="r24v8ft4o wm-shine"/><path class="v17pegbsy wm-deco"/><path class="jsa556b4r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:vault"} {...others} />);
}

export default Component;
