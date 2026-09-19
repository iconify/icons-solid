import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctmlb8_7m.css';
import '../../css/o/ohca03fbp.css';
import '../../css/c/cy8-8obke.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ctmlb8_7m"><path class="ohca03fbp"/><path class="cy8-8obke"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:seek-skip"} {...others} />);
}

export default Component;
