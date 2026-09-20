import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/so5a6b.css';
import '../../css/t/t5pxry.css';
import '../../css/u/u63-fz.css';
import '../../css/w/wi9aei.css';
import '../../css/w/wb185e.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-70.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGFKpkqw2i"><path class="so5a6b t5pxry"/><path class="t5pxry u63-fz wi9aei"/><path class="t5pxry u63-fz wb185e"/></mask></defs><path mask="url(#SVGFKpkqw2i)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-alert-filled"} {...others} />);
}

export default Component;
