import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/ri3c9vw6m.css';
import '../../css/h/h7w53btza.css';
import '../../css/a/a9eh8zbbi.css';
import '../../css/w/wc8rpkb2n.css';
import '../../css/b/bfoya5brd.css';
import '../../css/h/h4h-1cbhe.css';
import '../../css/z/zcuj86ukr.css';
import '../../css/p/p7qmdbbhw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ri3c9vw6m wm-shadow"/><path class="h7w53btza"/><path class="a9eh8zbbi"/><path class="wc8rpkb2n"/><path class="bfoya5brd"/><path class="h4h-1cbhe wm-s"/><path class="wm-s zcuj86ukr"/><path class="p7qmdbbhw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:love-letter"} {...others} />);
}

export default Component;
