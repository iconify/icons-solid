import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vvt-6fbhq.css';
import '../../css/f/fqnjm0b7z.css';
import '../../css/s/sdt8tgbql.css';
import '../../css/w/w1ytikbkp.css';
import '../../css/j/jc4j63bhv.css';
import '../../css/u/uqf28_b7c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vvt-6fbhq wm-deco"/><path class="fqnjm0b7z wm-deco"/><path class="sdt8tgbql wm-deco"/><path class="w1ytikbkp wm-k"/><path class="jc4j63bhv wm-a"/><path class="uqf28_b7c wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:ambulance-blueprint"} {...others} />);
}

export default Component;
