import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hm0_li9oz.css';
import '../../css/p/pvibm5b-i.css';
import '../../css/w/wuzmabbuo.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="hm0_li9oz"/><path class="pvibm5b-i"/><path clip-rule="evenodd" class="wuzmabbuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:phone-vibrate-flat"} {...others} />);
}

export default Component;
