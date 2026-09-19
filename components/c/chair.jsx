import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/c7dx5cb3s.css';
import '../../css/m/m0kz_fb2f.css';
import '../../css/i/iz2f9ctny.css';
import '../../css/r/rudj3bvol.css';
import '../../css/u/u10kgnb9h.css';
import '../../css/i/i57p2dift.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="c7dx5cb3s"/><path class="m0kz_fb2f"/><path class="iz2f9ctny"/><path class="rudj3bvol"/><path class="u10kgnb9h"/><path class="i57p2dift"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:chair"} {...others} />);
}

export default Component;
