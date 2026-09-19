import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/alc186bpr.css';
import '../../css/s/s5iqn736v.css';
import '../../css/l/l65nnu6hm.css';
import '../../css/n/nqv10_xmu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="alc186bpr"/><path class="s5iqn736v"/><path class="l65nnu6hm"/><path class="nqv10_xmu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:close-policy-gaps-24px"} {...others} />);
}

export default Component;
