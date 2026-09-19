import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/c/c-s9dmbcc.css';
import '../../css/h/hxe0gtkhw.css';
import '../../css/w/wxj73ibaa.css';
import '../../css/u/utkqjrbed.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="c-s9dmbcc"/><path class="hxe0gtkhw"/><path class="wxj73ibaa"/><path class="utkqjrbed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:openmouth"} {...others} />);
}

export default Component;
