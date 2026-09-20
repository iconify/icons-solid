import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xv6sb0vcm.css';
import '../../css/j/jkdnodbrt.css';
import '../../css/e/ekmgl_bye.css';
import '../../css/k/kmhl1_rdk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="xv6sb0vcm"/><path class="jkdnodbrt"/><path class="ekmgl_bye"/><path class="kmhl1_rdk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:log"} {...others} />);
}

export default Component;
