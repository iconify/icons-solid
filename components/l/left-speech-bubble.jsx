import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-joq1b3b.css';
import '../../css/v/vcw2ztboc.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y-joq1b3b"/><path class="vcw2ztboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:left-speech-bubble"} {...others} />);
}

export default Component;
