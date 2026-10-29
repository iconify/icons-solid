import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hz3ioibip.css';
import '../../css/e/eb2qabupy.css';
import '../../css/v/v9kcjcblo.css';
import '../../css/q/qgxdpvvoh.css';
import '../../css/i/iva3jddmj.css';
import '../../css/j/ja2t0pb3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="hz3ioibip wm-deco"/><path class="eb2qabupy wm-deco"/><path class="v9kcjcblo wm-k"/><path class="qgxdpvvoh wm-a"/><path class="iva3jddmj wm-k"/><path class="ja2t0pb3z wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-down-right-blueprint"} {...others} />);
}

export default Component;
