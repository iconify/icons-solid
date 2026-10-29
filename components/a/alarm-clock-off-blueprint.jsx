import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vxh4nij7q.css';
import '../../css/t/tem0hvbop.css';
import '../../css/y/ys6nk2k2i.css';
import '../../css/t/t12kj3b5j.css';
import '../../css/t/t1khfhdyn.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/p/p7y8o2c9v.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="vxh4nij7q wm-deco"/><path class="tem0hvbop wm-deco"/><path class="wm-deco ys6nk2k2i"/><path class="t12kj3b5j wm-k"/><path class="t1khfhdyn wm-a"/><path class="v3uzkxb0u wm-s"/><path class="p7y8o2c9v wm-k"/><path class="d6b7dubbd wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alarm-clock-off-blueprint"} {...others} />);
}

export default Component;
