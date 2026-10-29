import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/di8dd7b4y.css';
import '../../css/r/rwxzb1bkv.css';
import '../../css/x/x3bxksq_t.css';
import '../../css/d/dfmjv0mrp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="di8dd7b4y"/><path class="rwxzb1bkv wm-shadow"/><path class="x3bxksq_t"/><path class="dfmjv0mrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:music-2-engrave"} {...others} />);
}

export default Component;
