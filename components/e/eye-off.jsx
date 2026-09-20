import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/v32ch_s6q.css';
import '../../css/r/rt9zs7bvl.css';
import '../../css/p/p3ifo4qzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="v32ch_s6q"/><path class="rt9zs7bvl"/><path class="p3ifo4qzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:eye-off"} {...others} />);
}

export default Component;
