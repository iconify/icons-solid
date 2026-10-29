import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yvxim9bao.css';
import '../../css/t/tm9q6ob1c.css';
import '../../css/x/x5e6z5q6n.css';
import '../../css/b/by3-zccen.css';
import '../../css/q/q08n-4bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yvxim9bao"/><path class="tm9q6ob1c wm-deco"/><path class="wm-deco x5e6z5q6n"/><path class="by3-zccen wm-k"/><path class="q08n-4bjs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sun-moon-blueprint"} {...others} />);
}

export default Component;
