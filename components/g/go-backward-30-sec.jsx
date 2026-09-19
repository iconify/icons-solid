import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/m/mtdeygbej.css';
import '../../css/v/v0x2tob3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="mtdeygbej"/><path class="v0x2tob3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:go-backward-30-sec"} {...others} />);
}

export default Component;
