import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rjnqrnbqr.css';
import '../../css/e/eo5njqbna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="rjnqrnbqr wm-deco"/><path class="eo5njqbna wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sidebar-sketch"} {...others} />);
}

export default Component;
