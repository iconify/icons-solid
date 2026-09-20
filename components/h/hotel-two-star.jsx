import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vxm8p3i5b.css';
import '../../css/u/u-rm4cb6g.css';
import '../../css/j/jq8_tltkz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="vxm8p3i5b"/><path class="u-rm4cb6g"/><path class="jq8_tltkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:hotel-two-star"} {...others} />);
}

export default Component;
