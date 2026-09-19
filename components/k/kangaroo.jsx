import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7yrl6lbb.css';
import '../../css/w/w6xc5vbzb.css';
import '../../css/r/rf_lmqdyt.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="h7yrl6lbb"/><path class="w6xc5vbzb"/><path class="rf_lmqdyt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:kangaroo"} {...others} />);
}

export default Component;
