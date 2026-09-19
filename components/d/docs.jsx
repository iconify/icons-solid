import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/d/dlx2ec6bv.css';
import '../../css/t/t4xlwxbud.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><path class="dlx2ec6bv"/><path class="t4xlwxbud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:docs"} {...others} />);
}

export default Component;
