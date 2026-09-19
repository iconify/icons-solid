import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/h/h7a5zg8ao.css';
import '../../css/a/a9p3_abkz.css';
import '../../css/d/dj143_j_v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="h7a5zg8ao"/><path class="a9p3_abkz"/><path class="dj143_j_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:kissclosedeyes"} {...others} />);
}

export default Component;
