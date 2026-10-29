import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jhwttkscv.css';
import '../../css/v/vrdnwmbuc.css';
import '../../css/w/wpmjzybyt.css';
import '../../css/n/natiuwblb.css';
import '../../css/s/sjtkfs3hl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="jhwttkscv"/><path class="vrdnwmbuc wm-a"/><path class="wm-a wpmjzybyt"/><path class="natiuwblb"/><path class="sjtkfs3hl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gift-stack-duo"} {...others} />);
}

export default Component;
