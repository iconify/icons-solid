import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/ps9yt4x-f.css';
import '../../css/e/eoqwkvbie.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/b/brejjgbmj.css';
import '../../css/p/pf05l3ymp.css';
import '../../css/d/dkfws9ftw.css';
import '../../css/j/js6dqit3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ps9yt4x-f wm-deco"/><path class="eoqwkvbie wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="brejjgbmj wm-k"/><path class="pf05l3ymp wm-a"/><path class="dkfws9ftw wm-s"/><path class="js6dqit3x wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-sun-rain-blueprint"} {...others} />);
}

export default Component;
