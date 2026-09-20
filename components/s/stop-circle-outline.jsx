import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/u9mbdp5lw.css';
import '../../css/z/zt_l6p9nm.css';

const viewBox = {"width":15,"height":15};
const content = `<g class="h01tyzbfu"><path class="u9mbdp5lw"/><path class="zt_l6p9nm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:stop-circle-outline"} {...others} />);
}

export default Component;
