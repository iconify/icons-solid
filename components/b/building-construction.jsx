import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mzlkcrbwv.css';
import '../../css/x/xa1bpr4re.css';
import '../../css/s/s7483bbtj.css';
import '../../css/y/ybm2l5b6u.css';
import '../../css/i/i_-qmgbhg.css';
import '../../css/h/hv8mpjxkx.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mzlkcrbwv"/><path class="xa1bpr4re"/><path class="s7483bbtj"/><path class="ybm2l5b6u"/><path class="i_-qmgbhg"/><path class="hv8mpjxkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:building-construction"} {...others} />);
}

export default Component;
