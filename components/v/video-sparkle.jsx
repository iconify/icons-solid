import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bz6muwb-n.css';
import '../../css/y/y2kw9ytba.css';
import '../../css/j/jpu3wbbyc.css';
import '../../css/t/t12pdhbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bz6muwb-n"/><path class="y2kw9ytba"/><path class="jpu3wbbyc"/><path class="t12pdhbtt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-sparkle"} {...others} />);
}

export default Component;
