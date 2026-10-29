import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lt5xwl8wq.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/a/ayxxm_17i.css';
import '../../css/w/w0z764b_j.css';
import '../../css/f/f5kdtbghc.css';
import '../../css/r/r62ao_baw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="lt5xwl8wq wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="ayxxm_17i wm-deco"/><path class="w0z764b_j wm-k"/><circle class="f5kdtbghc wm-a"/><path class="r62ao_baw wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:rangoli-pattern-blueprint"} {...others} />);
}

export default Component;
