import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2sizkbqj.css';
import '../../css/h/hafmr5bae.css';
import '../../css/t/thmz8fbjm.css';
import '../../css/h/h_4609b7v.css';
import '../../css/b/b6goobcro.css';
import '../../css/o/o17wxqhjn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="v2sizkbqj"/><path class="hafmr5bae"/><path class="thmz8fbjm"/><path class="h_4609b7v"/><path class="b6goobcro"/><path class="o17wxqhjn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:coffin"} {...others} />);
}

export default Component;
