import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/grhjlkbkz.css';
import '../../css/o/osc1dpxcc.css';
import '../../css/n/n77v4qugm.css';
import '../../css/p/ph9y_ccqv.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="grhjlkbkz"/><path class="osc1dpxcc"/><path clip-rule="evenodd" class="n77v4qugm"/><path class="ph9y_ccqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:right-facing-fist-medium"} {...others} />);
}

export default Component;
