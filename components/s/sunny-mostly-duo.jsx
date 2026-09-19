import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_0ex7y7n.css';
import '../../css/z/zn5wvtzfp.css';
import '../../css/z/zx8orabuq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="g_0ex7y7n"/><path class="zn5wvtzfp"/><path class="zx8orabuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:sunny-mostly-duo"} {...others} />);
}

export default Component;
