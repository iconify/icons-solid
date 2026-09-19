import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m34l80bte.css';
import '../../css/j/jnjltmkva.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="m34l80bte"/><path class="jnjltmkva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:floppy"} {...others} />);
}

export default Component;
