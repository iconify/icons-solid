import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zs1djybzo.css';
import '../../css/n/nm1t5obly.css';
import '../../css/g/gs4hihbsw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="zs1djybzo"/><path class="nm1t5obly"/><path class="gs4hihbsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:wordpress"} {...others} />);
}

export default Component;
