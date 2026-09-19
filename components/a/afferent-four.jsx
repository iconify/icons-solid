import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/axnccqqqw.css';
import '../../css/y/y4xzshe5r.css';
import '../../css/u/unnkb9a0r.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="axnccqqqw"/><path class="y4xzshe5r"/><path class="unnkb9a0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:afferent-four"} {...others} />);
}

export default Component;
