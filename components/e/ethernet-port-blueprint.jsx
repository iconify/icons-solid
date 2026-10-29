import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bpsdnccop.css';
import '../../css/g/g2xclxbug.css';
import '../../css/s/soc03pbkp.css';
import '../../css/f/f3tg6ebbt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bpsdnccop wm-deco"/><path class="g2xclxbug wm-deco"/><path class="soc03pbkp wm-k"/><path class="f3tg6ebbt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ethernet-port-blueprint"} {...others} />);
}

export default Component;
