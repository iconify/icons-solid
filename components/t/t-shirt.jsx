import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqavturbc.css';
import '../../css/q/qnfai9ogm.css';
import '../../css/a/at1cxv7wl.css';
import '../../css/s/s9wn5-b0r.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="aqavturbc"/><path class="qnfai9ogm"/><path class="at1cxv7wl"/><path class="s9wn5-b0r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:t-shirt"} {...others} />);
}

export default Component;
