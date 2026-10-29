import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z8l28cbll.css';
import '../../css/z/zu-tg1-8v.css';
import '../../css/j/jxypp_bkd.css';
import '../../css/t/tm19bt68n.css';
import '../../css/x/xuhta9yqz.css';
import '../../css/g/g6_477byu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco z8l28cbll"/><path class="wm-deco zu-tg1-8v"/><path class="jxypp_bkd wm-deco"/><path class="tm19bt68n wm-k"/><path class="wm-s xuhta9yqz"/><path class="g6_477byu wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-cog-blueprint"} {...others} />);
}

export default Component;
