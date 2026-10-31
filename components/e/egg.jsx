import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/e/e-y2mtbbu.css';
import '../../css/d/dwmxtrzeo.css';
import '../../css/f/fap4nybrw.css';
import '../../css/i/ic2u5wcyn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="e-y2mtbbu wm-shadow"/><path class="dwmxtrzeo wm-shadow"/><path class="fap4nybrw"/><path class="ic2u5wcyn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:egg"} {...others} />);
}

export default Component;
