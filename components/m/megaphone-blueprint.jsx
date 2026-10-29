import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mze3curll.css';
import '../../css/d/d17zgng_a.css';
import '../../css/z/z43j8q9jh.css';
import '../../css/u/uvfwd4wqi.css';
import '../../css/f/f26bn-hui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="mze3curll wm-deco"/><path class="d17zgng_a wm-deco"/><path class="wm-deco z43j8q9jh"/><path class="uvfwd4wqi wm-k"/><path class="f26bn-hui wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:megaphone-blueprint"} {...others} />);
}

export default Component;
