import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/i/ie2xr5bqf.css';
import '../../css/s/sohw4olop.css';
import '../../css/c/csigaqbdp.css';
import '../../css/e/em3kjju-y.css';
import '../../css/l/lsx7yjqrf.css';
import '../../css/e/e4rjah9em.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="ie2xr5bqf wm-deco"/><path class="sohw4olop wm-deco"/><path class="csigaqbdp wm-deco"/><path class="em3kjju-y wm-k"/><path class="lsx7yjqrf wm-a"/><path class="e4rjah9em wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:love-lock-blueprint"} {...others} />);
}

export default Component;
