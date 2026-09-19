import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/x/x7ptq8p-g.css';
import '../../css/z/zm--xre6q.css';
import '../../css/c/ca7cldnps.css';
import '../../css/m/mhekwub7m.css';
import '../../css/p/ps9jkkbrq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><rect class="x7ptq8p-g"/><path class="zm--xre6q"/><path class="ca7cldnps"/><path class="mhekwub7m"/><path class="ps9jkkbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:podcast-outline"} {...others} />);
}

export default Component;
