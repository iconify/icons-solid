import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f-3v2ab3t.css';
import '../../css/w/wdkrmum0i.css';
import '../../css/e/ewmg-bcus.css';
import '../../css/o/omu5u4v-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="f-3v2ab3t"/><path class="wdkrmum0i"/><path class="ewmg-bcus"/><path clip-rule="evenodd" class="omu5u4v-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:home-wifi2"} {...others} />);
}

export default Component;
