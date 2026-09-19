import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wu-rm0sbq.css';
import '../../css/b/bcnfd8ber.css';
import '../../css/y/ysf3pfyth.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wu-rm0sbq"/><path class="bcnfd8ber"/><path class="ysf3pfyth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:dolphin"} {...others} />);
}

export default Component;
