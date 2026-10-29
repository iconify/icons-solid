import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sf1l2bhac.css';
import '../../css/g/g1pgfw0fr.css';
import '../../css/j/jte2_gc_y.css';
import '../../css/p/p88f2tb2u.css';
import '../../css/x/xw69bzzae.css';
import '../../css/h/hi2gkrsph.css';
import '../../css/g/g3k3a7bux.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sf1l2bhac wm-k"/><path class="g1pgfw0fr wm-a"/><path class="jte2_gc_y wm-shadow"/><path class="p88f2tb2u wm-k"/><path class="wm-k xw69bzzae"/><path class="hi2gkrsph wm-a"/><path class="g3k3a7bux wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-woman-curly-engrave"} {...others} />);
}

export default Component;
