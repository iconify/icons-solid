import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smrjlo_7k.css';
import '../../css/i/i89nsvvof.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="smrjlo_7k"/><path class="i89nsvvof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:postage-fill"} {...others} />);
}

export default Component;
