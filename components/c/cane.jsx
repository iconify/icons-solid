import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/svp_edbxz.css';
import '../../css/b/blf2vnb9u.css';
import '../../css/b/bnxhddcwu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="svp_edbxz"/><path class="blf2vnb9u"/><path class="bnxhddcwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:cane"} {...others} />);
}

export default Component;
