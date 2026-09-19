import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/q/qtri30bwf.css';
import '../../css/j/j0ex7ac3k.css';
import '../../css/c/cbh5v1b3e.css';
import '../../css/w/w-xvp5-hk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="qtri30bwf"/><path class="j0ex7ac3k"/><path class="cbh5v1b3e"/><path class="w-xvp5-hk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:menu-unfold"} {...others} />);
}

export default Component;
