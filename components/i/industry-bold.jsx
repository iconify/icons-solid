import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ngc5w1b_f.css';
import '../../css/s/slpd7bdal.css';
import '../../css/s/slwdzb4zh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ngc5w1b_f"/><path class="slpd7bdal"/><path clip-rule="evenodd" class="slwdzb4zh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:industry-bold"} {...others} />);
}

export default Component;
