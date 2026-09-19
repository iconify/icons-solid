import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hl5setcia.css';
import '../../css/r/rfhv6dwjy.css';
import '../../css/g/g-pa23blj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="hl5setcia"/><path class="rfhv6dwjy"/><path class="g-pa23blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:house-gear-fill"} {...others} />);
}

export default Component;
