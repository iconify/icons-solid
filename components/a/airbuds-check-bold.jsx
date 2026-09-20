import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gapqp1bwb.css';
import '../../css/h/hs8q6tbjn.css';
import '../../css/d/dcxz7vgia.css';
import '../../css/v/vheqg2b0h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gapqp1bwb"/><path class="hs8q6tbjn"/><path clip-rule="evenodd" class="dcxz7vgia"/><path clip-rule="evenodd" class="vheqg2b0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:airbuds-check-bold"} {...others} />);
}

export default Component;
