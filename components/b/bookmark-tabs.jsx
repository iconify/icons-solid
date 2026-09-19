import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rz_om1bqa.css';
import '../../css/m/mo85ezbja.css';
import '../../css/n/nii-7g3eu.css';
import '../../css/k/k4l1a_btn.css';
import '../../css/w/w5z09phlo.css';
import '../../css/x/xw2k72b5b.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="rz_om1bqa"/><path class="mo85ezbja"/><path class="nii-7g3eu"/><path class="k4l1a_btn"/><path class="w5z09phlo"/><path class="xw2k72b5b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bookmark-tabs"} {...others} />);
}

export default Component;
