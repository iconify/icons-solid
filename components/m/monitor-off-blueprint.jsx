import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/ssiaijb3k.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/v/v_7_p5b7p.css';
import '../../css/g/gdif04buu.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/b/b8eo_dy6c.css';
import '../../css/d/da8zwfb5x.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ssiaijb3k wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="v_7_p5b7p wm-k"/><path class="gdif04buu wm-a"/><path class="v3uzkxb0u wm-s"/><path class="b8eo_dy6c wm-k"/><path class="da8zwfb5x wm-a"/><path class="d6b7dubbd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:monitor-off-blueprint"} {...others} />);
}

export default Component;
