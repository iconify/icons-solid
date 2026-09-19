import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t683vessx.css';
import '../../css/o/oxsc-cbhz.css';
import '../../css/i/i266r4b2x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="t683vessx"/><path class="oxsc-cbhz"/><path class="i266r4b2x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:files"} {...others} />);
}

export default Component;
