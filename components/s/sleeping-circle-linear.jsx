import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s_w074bqo.css';
import '../../css/g/glsnqibje.css';
import '../../css/b/b6ykzlr9k.css';
import '../../css/y/yod4tl2uo.css';
import '../../css/e/ejaksrbvy.css';
import '../../css/p/pr1jznbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="s_w074bqo"/><path class="glsnqibje"/><path class="b6ykzlr9k"/><path class="yod4tl2uo"/><path class="ejaksrbvy"/><path class="pr1jznbmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sleeping-circle-linear"} {...others} />);
}

export default Component;
