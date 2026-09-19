import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_e9s3b0c.css';
import '../../css/p/pj_2zb4qu.css';
import '../../css/i/ie4mcb0dg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_e9s3b0c"/><rect transform="rotate(45 307.788 204.2)" class="pj_2zb4qu"/><path class="ie4mcb0dg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:eyedrop-outline"} {...others} />);
}

export default Component;
