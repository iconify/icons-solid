import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bym8zsb_r.css';
import '../../css/z/z566erb8j.css';
import '../../css/u/ur1ufwbfi.css';
import '../../css/i/ike3v34es.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bym8zsb_r"/><path class="z566erb8j"/><path class="ur1ufwbfi"/><path class="ike3v34es"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-code-bold-duotone"} {...others} />);
}

export default Component;
