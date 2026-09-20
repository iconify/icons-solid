import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wd-n0bc9l.css';
import '../../css/k/kdpl1_b6g.css';
import '../../css/o/og_8k_rlo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="wd-n0bc9l"/><path class="kdpl1_b6g"/><path class="og_8k_rlo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:suitcase2-duotone"} {...others} />);
}

export default Component;
