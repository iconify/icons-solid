import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ifk-i5r3v.css';
import '../../css/b/btqq080xb.css';
import '../../css/v/vkjbxxorz.css';
import '../../css/a/a98qbdbjk.css';
import '../../css/t/t5jn33bdv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ifk-i5r3v"/><path class="btqq080xb"/><path class="vkjbxxorz"/><path class="a98qbdbjk"/><path class="t5jn33bdv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hamster"} {...others} />);
}

export default Component;
