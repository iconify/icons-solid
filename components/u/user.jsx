import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/v/vgrnl84ou.css';
import '../../css/e/efu_9yb_l.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ufeehvblu"><path class="vgrnl84ou"/><path class="efu_9yb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:user"} {...others} />);
}

export default Component;
