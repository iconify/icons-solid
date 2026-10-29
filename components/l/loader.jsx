import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wij26x4pc.css';
import '../../css/m/m-j57qakv.css';
import '../../css/m/myxxvabeh.css';
import '../../css/c/cbuc0sb9j.css';
import '../../css/x/xzk2wf4zt.css';
import '../../css/h/ho1yev95w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="wij26x4pc wm-shadow"/><path class="m-j57qakv"/><path class="myxxvabeh"/><path class="cbuc0sb9j"/><path class="wm-shine xzk2wf4zt"/><path class="ho1yev95w wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:loader"} {...others} />);
}

export default Component;
