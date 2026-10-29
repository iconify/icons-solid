import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/a3aym7b6o.css';
import '../../css/c/c14f8wbvr.css';
import '../../css/p/pxm7zm4qo.css';
import '../../css/a/av-c1ubeh.css';
import '../../css/z/zckthzbyo.css';
import '../../css/z/zfnx1hbxp.css';
import '../../css/d/dhw7yf05m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="a3aym7b6o wm-deco"/><path class="c14f8wbvr wm-deco"/><path class="pxm7zm4qo wm-deco"/><path class="av-c1ubeh wm-k"/><path class="wm-a zckthzbyo"/><path class="wm-k zfnx1hbxp"/><path class="dhw7yf05m wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:volume-blueprint"} {...others} />);
}

export default Component;
