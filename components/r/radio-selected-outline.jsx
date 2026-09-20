import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/imnimkbei.css';
import '../../css/i/irkg-qf8o.css';
import '../../css/i/iziuvkmoy.css';
import '../../css/o/o3ma1_buu.css';
import '../../css/n/n6_wcbc0h.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="imnimkbei"/><path class="irkg-qf8o"/><path class="iziuvkmoy"/><path class="o3ma1_buu"/><path class="n6_wcbc0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:radio-selected-outline"} {...others} />);
}

export default Component;
