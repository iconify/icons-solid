import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/qneop9b7o.css';
import '../../css/v/vflsszkut.css';
import '../../css/b/bxjv56brc.css';
import '../../css/f/f2vk28qwl.css';
import '../../css/j/j9br22bqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="qneop9b7o wm-deco"/><path class="vflsszkut wm-deco"/><path class="bxjv56brc wm-deco"/><path class="f2vk28qwl wm-k"/><path class="j9br22bqu wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:avatar-frog-blueprint"} {...others} />);
}

export default Component;
