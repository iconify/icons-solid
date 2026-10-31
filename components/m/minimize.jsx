import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u1c40mbzp.css';
import '../../css/l/l-esgwk4n.css';
import '../../css/g/gfk1j8bwj.css';
import '../../css/x/xarwo-d3l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="u1c40mbzp wm-shadow"/><path class="l-esgwk4n wm-shadow"/><path class="gfk1j8bwj"/><path class="xarwo-d3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:minimize"} {...others} />);
}

export default Component;
