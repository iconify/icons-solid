import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h1k_zebeg.css';
import '../../css/u/u69emoh0k.css';
import '../../css/p/pghpbqv_s.css';
import '../../css/p/pzwjaxb8h.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="h1k_zebeg"/><path class="u69emoh0k"/><path class="pghpbqv_s"/><path class="pzwjaxb8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:play-basketball"} {...others} />);
}

export default Component;
