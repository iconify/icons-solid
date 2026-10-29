import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/iszg7ccwj.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/k/k6tf0lb3j.css';
import '../../css/g/gdif04buu.css';
import '../../css/j/jmku5acuo.css';
import '../../css/d/da8zwfb5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="iszg7ccwj wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="k6tf0lb3j wm-k"/><path class="gdif04buu wm-a"/><path class="jmku5acuo wm-s"/><path class="da8zwfb5x wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:screen-share-blueprint"} {...others} />);
}

export default Component;
