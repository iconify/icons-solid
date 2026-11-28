import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d66__ndqj.css';
import '../../css/v/vn0mvuk9v.css';
import '../../css/z/zcrz0bcfr.css';
import '../../css/x/x6k5oubzl.css';
import '../../css/b/bxf12obpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="d66__ndqj"/><path class="vn0mvuk9v"/><path class="zcrz0bcfr"/><path class="x6k5oubzl"/><path class="bxf12obpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:sitemap"} {...others} />);
}

export default Component;
