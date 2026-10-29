import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yhsiugbih.css';
import '../../css/k/k40-xdbak.css';
import '../../css/a/a7x_knbvb.css';
import '../../css/m/mluzlacjd.css';
import '../../css/v/v3nipsb5s.css';
import '../../css/x/xi3fmj3ll.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="wm-deco yhsiugbih"/><path class="k40-xdbak wm-deco"/><path class="a7x_knbvb wm-deco"/><path class="mluzlacjd wm-k"/><path class="v3nipsb5s wm-a"/><path class="wm-k xi3fmj3ll"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:gauge-blueprint"} {...others} />);
}

export default Component;
