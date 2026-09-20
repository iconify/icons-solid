import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndg0sd.css';
import '../../css/t/t5pxry.css';
import '../../css/b/b5xu8h.css';
import '../../css/b/botfzx.css';
import '../../css/d/d-gf8qwu.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-1.css';
import '../../css/d/d-b--xzt.css';
import '../../css/f/fade-to-1.css';
import '../../css/s/so-from-8.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG9DPPUdKq"><path class="ndg0sd t5pxry"/><path class="b5xu8h t5pxry"/></mask></defs><path mask="url(#SVG9DPPUdKq)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:cloud-alt-tags-filled-loop"} {...others} />);
}

export default Component;
