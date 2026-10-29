import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/uow9c5bpy.css';
import '../../css/l/lt5xwl8wq.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/k/kovqn7y-o.css';
import '../../css/u/ui37xobeh.css';
import '../../css/z/z18gy67wt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="uow9c5bpy wm-deco"/><path class="lt5xwl8wq wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="kovqn7y-o wm-k"/><path class="ui37xobeh wm-a"/><path class="wm-a z18gy67wt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:coins-blueprint"} {...others} />);
}

export default Component;
