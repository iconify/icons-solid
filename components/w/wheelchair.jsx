import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_semibtt.css';
import '../../css/g/g_82qn13v.css';
import '../../css/m/mc4nh2bkz.css';
import '../../css/e/esan_6mzl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="c_semibtt"/><path class="g_82qn13v"/><path class="mc4nh2bkz"/><path class="esan_6mzl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wheelchair"} {...others} />);
}

export default Component;
