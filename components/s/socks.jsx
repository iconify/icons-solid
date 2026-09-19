import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mq1o1nrlo.css';
import '../../css/l/l4q9q9b8z.css';
import '../../css/n/noghwpwhj.css';
import '../../css/i/i7tjrs9ek.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mq1o1nrlo"/><path class="l4q9q9b8z"/><path clip-rule="evenodd" class="noghwpwhj"/><path class="i7tjrs9ek"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:socks"} {...others} />);
}

export default Component;
