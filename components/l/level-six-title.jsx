import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l_b2deb8g.css';
import '../../css/i/i81rab26g.css';
import '../../css/i/i3l2mxbql.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="l_b2deb8g"/><path class="i81rab26g"/><path class="i3l2mxbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:level-six-title"} {...others} />);
}

export default Component;
