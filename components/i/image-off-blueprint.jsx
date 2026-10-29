import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bmz6v8bmy.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/n/nsik7n9oa.css';
import '../../css/f/fswuyh-rm.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/r/r_u7cjb8i.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="bmz6v8bmy wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="nsik7n9oa wm-k"/><path class="fswuyh-rm wm-a"/><path class="v3uzkxb0u wm-s"/><path class="r_u7cjb8i wm-k"/><path class="d6b7dubbd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:image-off-blueprint"} {...others} />);
}

export default Component;
