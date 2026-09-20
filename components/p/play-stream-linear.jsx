import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d3iab9b0e.css';
import '../../css/z/zx4z7abfl.css';
import '../../css/v/v_r-dov2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="d3iab9b0e"/><path class="zx4z7abfl"/><path class="v_r-dov2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:play-stream-linear"} {...others} />);
}

export default Component;
