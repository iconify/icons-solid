import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bx6h-ubow.css';
import '../../css/s/sx13j5bfm.css';
import '../../css/k/k5kkv_n6l.css';
import '../../css/u/ula6avb3k.css';
import '../../css/v/vus1pgyxj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bx6h-ubow"/><path class="sx13j5bfm"/><path class="k5kkv_n6l"/><path class="ula6avb3k"/><path class="vus1pgyxj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:specifically-clementines"} {...others} />);
}

export default Component;
