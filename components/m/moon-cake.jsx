import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wblrkxbhv.css';
import '../../css/r/ruq5dd2yh.css';
import '../../css/y/y78pb0g9y.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wblrkxbhv"/><path class="ruq5dd2yh"/><path class="y78pb0g9y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:moon-cake"} {...others} />);
}

export default Component;
