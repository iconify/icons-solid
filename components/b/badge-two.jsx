import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/c/cgwwmcz6s.css';
import '../../css/z/zja1041ff.css';
import '../../css/m/mtfmea0pv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="cgwwmcz6s"/><path class="zja1041ff"/><path class="mtfmea0pv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:badge-two"} {...others} />);
}

export default Component;
