import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g26hbu.css';
import '../../css/t/t5pxry.css';
import '../../css/z/z70o0j.css';
import '../../css/b/b9qm4w.css';
import '../../css/s/s17f8m.css';
import '../../css/u/u63-fz.css';
import '../../css/w/wg40yz.css';
import '../../css/b/botfzx.css';
import '../../css/s/so-from-54.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d-ssqjbr.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGBfWvbeVR"><path class="g26hbu t5pxry z70o0j"/><path class="b9qm4w g26hbu"/><path class="s17f8m t5pxry u63-fz"/><path class="t5pxry u63-fz wg40yz"/></mask></defs><path mask="url(#SVGBfWvbeVR)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:chat-round-alert-filled"} {...others} />);
}

export default Component;
