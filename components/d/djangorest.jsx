import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hc_q9jbdu.css';
import '../../css/c/c5p8reb_m.css';
import '../../css/z/zzxe0-1un.css';
import '../../css/h/h84axl_8p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="hc_q9jbdu"/><path class="c5p8reb_m"/><path class="zzxe0-1un"/><path class="h84axl_8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:djangorest"} {...others} />);
}

export default Component;
