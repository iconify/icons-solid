import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d90u9e2cl.css';
import '../../css/y/yedrxvbcn.css';
import '../../css/u/umro7hm1n.css';
import '../../css/j/jhzkcobgl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="d90u9e2cl"/><path clip-rule="evenodd" class="yedrxvbcn"/><path class="umro7hm1n"/><path clip-rule="evenodd" class="jhzkcobgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:page-break-outline"} {...others} />);
}

export default Component;
