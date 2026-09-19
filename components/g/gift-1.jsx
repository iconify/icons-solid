import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjvia45sw.css';
import '../../css/t/tm8p9gwlr.css';
import '../../css/p/p8eiskbvq.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="wjvia45sw"/><path class="tm8p9gwlr"/><path class="p8eiskbvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:gift-1"} {...others} />);
}

export default Component;
