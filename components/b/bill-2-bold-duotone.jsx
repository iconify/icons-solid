import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gpxs-3vco.css';
import '../../css/l/l6e6t_bwu.css';
import '../../css/z/zg9huqb-e.css';
import '../../css/f/fhdjwwbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gpxs-3vco"/><path class="l6e6t_bwu"/><path class="zg9huqb-e"/><path class="fhdjwwbrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bill-2-bold-duotone"} {...others} />);
}

export default Component;
