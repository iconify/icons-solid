import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uw9x_cbei.css';
import '../../css/d/do02-k5_c.css';
import '../../css/i/i5adlfbfb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uw9x_cbei"/><path class="do02-k5_c"/><path class="i5adlfbfb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:plug-02"} {...others} />);
}

export default Component;
