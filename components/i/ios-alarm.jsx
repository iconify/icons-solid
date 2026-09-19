import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mmi-16b0h.css';
import '../../css/l/l544h_tbr.css';
import '../../css/l/l-m2k2bsw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mmi-16b0h"/><path class="l544h_tbr"/><g><path class="l-m2k2bsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-alarm"} {...others} />);
}

export default Component;
