import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bh3lzub3r.css';
import '../../css/x/x--ca5puy.css';
import '../../css/o/oojzhkm-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="bh3lzub3r"/><path class="x--ca5puy"/><path clip-rule="evenodd" class="oojzhkm-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sticker-smile-square-bold"} {...others} />);
}

export default Component;
