import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fb8vwhb_r.css';
import '../../css/u/ua-ambc_i.css';
import '../../css/w/wuvczemwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fb8vwhb_r"/><path class="ua-ambc_i"/><path clip-rule="evenodd" class="wuvczemwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:accessibility-outline"} {...others} />);
}

export default Component;
