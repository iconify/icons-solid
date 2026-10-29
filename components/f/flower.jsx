import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a3t95mkez.css';
import '../../css/g/gildbabbx.css';
import '../../css/n/n_z1wvwcp.css';
import '../../css/f/fglg6lv9h.css';
import '../../css/z/zqavsobhs.css';
import '../../css/i/iqqv4zbpi.css';
import '../../css/r/rcghj9b6s.css';
import '../../css/u/uyfly652l.css';
import '../../css/d/dry-pjcpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a3t95mkez wm-shadow"/><path class="gildbabbx wm-shadow"/><path class="n_z1wvwcp"/><path class="fglg6lv9h"/><path class="zqavsobhs"/><path class="iqqv4zbpi"/><path class="rcghj9b6s wm-shine"/><path class="uyfly652l"/><path class="dry-pjcpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:flower"} {...others} />);
}

export default Component;
