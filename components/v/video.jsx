import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5_qsukyp.css';
import '../../css/f/fi71x7bwr.css';

const viewBox = {"width":37,"height":32};
const content = `<g class="cuyn6tgcc"><path class="r5_qsukyp"/><path class="fi71x7bwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"et:video"} {...others} />);
}

export default Component;
