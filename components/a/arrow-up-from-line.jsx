import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/n/ni-ia8bfv.css';
import '../../css/d/dtuy-3yow.css';
import '../../css/v/v13r9pbwe.css';
import '../../css/z/zsgx8xboo.css';
import '../../css/h/h-u9aob1k.css';
import '../../css/d/dv114zb8r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="ni-ia8bfv wm-shadow"/><path class="dtuy-3yow"/><path class="v13r9pbwe"/><path class="zsgx8xboo"/><path class="h-u9aob1k wm-shine"/><path class="dv114zb8r wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:arrow-up-from-line"} {...others} />);
}

export default Component;
