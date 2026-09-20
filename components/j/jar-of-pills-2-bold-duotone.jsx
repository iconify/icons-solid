import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/p/pgwxs9y0p.css';
import '../../css/t/tis3uac2z.css';
import '../../css/e/e0oiq1b4b.css';
import '../../css/e/ezkrwwbti.css';
import '../../css/p/p8hma8byw.css';
import '../../css/t/t2dm15bhr.css';
import '../../css/c/clmipqbnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="pgwxs9y0p"/><path class="tis3uac2z"/><path class="e0oiq1b4b"/></g><path class="ezkrwwbti"/><path class="p8hma8byw"/><path class="t2dm15bhr"/><path class="clmipqbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:jar-of-pills-2-bold-duotone"} {...others} />);
}

export default Component;
