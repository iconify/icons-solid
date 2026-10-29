import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mkbzfbcab.css';
import '../../css/a/a4hjggb0v.css';
import '../../css/v/vuzeqx4xo.css';
import '../../css/u/u315dy91q.css';
import '../../css/l/lof7i1b0v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mkbzfbcab wm-k"/><path class="a4hjggb0v wm-a"/><path class="vuzeqx4xo wm-shadow"/><path class="u315dy91q wm-k"/><path class="lof7i1b0v wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sort-alpha-engrave"} {...others} />);
}

export default Component;
