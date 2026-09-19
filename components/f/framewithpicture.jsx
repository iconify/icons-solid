import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4d54nbgi.css';
import '../../css/n/nvnb2yl3l.css';
import '../../css/s/s164q9ezg.css';
import '../../css/s/s6ol5ccju.css';
import '../../css/j/j5lzypbjv.css';
import '../../css/k/kea0dyb4k.css';
import '../../css/o/oq7lg2blo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d4d54nbgi"/><path class="nvnb2yl3l"/><path class="s164q9ezg"/><path class="s6ol5ccju"/><path class="j5lzypbjv"/><circle class="kea0dyb4k"/><path class="oq7lg2blo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:framewithpicture"} {...others} />);
}

export default Component;
