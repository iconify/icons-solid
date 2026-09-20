import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9hwsze_c.css';
import '../../css/t/tziti9bjf.css';
import '../../css/s/s-v2yp81l.css';
import '../../css/h/hst1il4_s.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="z9hwsze_c"/><path class="tziti9bjf"/><path class="s-v2yp81l"/><path class="hst1il4_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shield-cross"} {...others} />);
}

export default Component;
