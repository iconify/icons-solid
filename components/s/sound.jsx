import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfxngabua.css';
import '../../css/s/syuwirbva.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fe_p2ybfu.css';
import '../../css/z/zwsgkpb8c.css';
import '../../css/d/d4cn7bb1x.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="bfxngabua"/><path class="syuwirbva"/><g class="cuyn6tgcc"><path class="fe_p2ybfu"/><path class="zwsgkpb8c"/><path class="d4cn7bb1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:sound"} {...others} />);
}

export default Component;
