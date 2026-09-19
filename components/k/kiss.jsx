import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/c/cx_xwub3m.css';
import '../../css/e/ek-8quwav.css';
import '../../css/g/gv08v1cli.css';
import '../../css/x/xyn9oibof.css';
import '../../css/j/j8sqlzbio.css';
import '../../css/w/w-7g9kbls.css';
import '../../css/c/c04a5096z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="cx_xwub3m"/><path class="ek-8quwav"/><path class="gv08v1cli"/><path class="xyn9oibof"/><path class="j8sqlzbio"/><path class="w-7g9kbls"/><path class="c04a5096z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:kiss"} {...others} />);
}

export default Component;
