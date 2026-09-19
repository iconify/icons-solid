import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/di7205bgb.css';
import '../../css/j/jd-n5bc_b.css';
import '../../css/g/gt65h22tq.css';
import '../../css/h/h0s5wccqo.css';
import '../../css/t/therzxb5l.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="di7205bgb"/><path clip-rule="evenodd" class="jd-n5bc_b"/><path class="gt65h22tq"/><path clip-rule="evenodd" class="h0s5wccqo"/><path class="therzxb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:luggage"} {...others} />);
}

export default Component;
