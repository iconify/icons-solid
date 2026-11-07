import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofjgs179i.css';
import '../../css/v/vvsvce0wk.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/f/fbhog9-zq.css';
import '../../css/c/cjfc5abjr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ofjgs179i"/><path clip-rule="evenodd" class="vvsvce0wk"/><g class="xtpeb-edw"><path class="fbhog9-zq"/><path class="cjfc5abjr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wallpaper-bold-duotone"} {...others} />);
}

export default Component;
