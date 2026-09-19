import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myubtaccl.css';
import '../../css/w/wzrscbbrd.css';
import '../../css/s/sz77vjbtt.css';
import '../../css/w/wgc76mb2m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="myubtaccl"/><path class="wzrscbbrd"/><path class="sz77vjbtt"/><circle class="wgc76mb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:walk-sharp"} {...others} />);
}

export default Component;
