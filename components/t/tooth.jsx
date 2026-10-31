import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umdxetbnf.css';
import '../../css/t/tr3ui2ews.css';
import '../../css/z/zl6jhp60c.css';
import '../../css/o/op_wf1bij.css';
import '../../css/e/eruygvblf.css';
import '../../css/n/n83cn8b7c.css';
import '../../css/v/vhnloqdve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="umdxetbnf wm-k"/><path class="tr3ui2ews wm-deco"/><path class="wm-k zl6jhp60c"/><path class="op_wf1bij wm-k"/><path class="eruygvblf wm-shadow"/><path class="n83cn8b7c wm-shine"/><path class="vhnloqdve wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:tooth"} {...others} />);
}

export default Component;
