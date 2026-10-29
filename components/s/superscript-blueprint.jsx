import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/wjpirkbti.css';
import '../../css/k/k2mk84q_o.css';
import '../../css/i/ig21_bcca.css';
import '../../css/h/hsqv0-b6f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wjpirkbti wm-deco"/><path class="k2mk84q_o wm-deco"/><path class="ig21_bcca wm-k"/><path class="hsqv0-b6f wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:superscript-blueprint"} {...others} />);
}

export default Component;
