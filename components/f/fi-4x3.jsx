import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5vgbcb_s.css';
import '../../css/t/t_skhdcko.css';
import '../../css/p/phnpi3grn.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="y5vgbcb_s"/><path class="t_skhdcko"/><path class="phnpi3grn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:fi-4x3"} {...others} />);
}

export default Component;
