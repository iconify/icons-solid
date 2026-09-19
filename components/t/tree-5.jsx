import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-n20_but.css';
import '../../css/x/x8vchdb5d.css';
import '../../css/i/i8tu9nw5b.css';
import '../../css/e/ezvwt8buk.css';
import '../../css/c/ckye5vm_q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="t-n20_but"><path class="x8vchdb5d"/><path class="i8tu9nw5b"/><path class="ezvwt8buk"/><path class="ckye5vm_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:tree-5"} {...others} />);
}

export default Component;
