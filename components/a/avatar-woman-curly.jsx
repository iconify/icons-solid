import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/axndqebjj.css';
import '../../css/p/pogsizxwf.css';
import '../../css/q/q8uxkfb-e.css';
import '../../css/j/j5-ljmbzq.css';
import '../../css/t/tbs6ncbcj.css';
import '../../css/k/kx3zikbiq.css';
import '../../css/k/kwj6ifbqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="axndqebjj wm-shadow"/><path class="pogsizxwf"/><path class="q8uxkfb-e"/><path class="j5-ljmbzq"/><path class="tbs6ncbcj"/><path class="kx3zikbiq"/><path class="kwj6ifbqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-woman-curly"} {...others} />);
}

export default Component;
