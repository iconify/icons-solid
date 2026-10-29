import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/f/fwduloe0g.css';
import '../../css/d/d352mmufr.css';
import '../../css/t/t1c6iwmbb.css';
import '../../css/k/k-m2qnbsk.css';
import '../../css/i/i15253ics.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="fwduloe0g wm-deco"/><path class="d352mmufr wm-deco"/><path class="t1c6iwmbb wm-k"/><path class="k-m2qnbsk wm-a"/><path class="i15253ics wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pipette-blueprint"} {...others} />);
}

export default Component;
