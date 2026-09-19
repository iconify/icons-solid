import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yhnpx4b2l.css';
import '../../css/s/s1ltn07vh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="yhnpx4b2l"/><path class="s1ltn07vh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:eye-in-speech-bubble"} {...others} />);
}

export default Component;
