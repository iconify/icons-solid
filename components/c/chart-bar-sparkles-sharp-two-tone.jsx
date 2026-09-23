import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vmd8dr46i.css';
import '../../css/b/bx-7x9snt.css';
import '../../css/c/c6upwkbge.css';
import '../../css/h/h82j8jb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="vmd8dr46i"/><path class="bx-7x9snt"/><path class="c6upwkbge"/><path class="h82j8jb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chart-bar-sparkles-sharp-two-tone"} {...others} />);
}

export default Component;
