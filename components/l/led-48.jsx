import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lw5lpmbnm.css';
import '../../css/d/dm_gb5vkl.css';
import '../../css/v/vi2fl0bal.css';
import '../../css/b/bj-2m5who.css';
import '../../css/l/lkejyhbkt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="lw5lpmbnm"/><path class="dm_gb5vkl"/><path class="vi2fl0bal"/><path class="bj-2m5who"/><path class="lkejyhbkt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:led-48"} {...others} />);
}

export default Component;
