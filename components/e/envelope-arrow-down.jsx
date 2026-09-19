import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w-whp5xlv.css';
import '../../css/w/wi3k8x65i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="w-whp5xlv"/><path class="wi3k8x65i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:envelope-arrow-down"} {...others} />);
}

export default Component;
