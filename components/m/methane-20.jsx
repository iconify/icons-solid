import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vd76aibix.css';
import '../../css/o/o6l1bjq5b.css';
import '../../css/v/vr6h6mb_x.css';
import '../../css/z/zll9itmnm.css';
import '../../css/f/f4i-1bbhp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vd76aibix"/><path class="o6l1bjq5b"/><path class="vr6h6mb_x"/><path class="zll9itmnm"/><path class="f4i-1bbhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:methane-20"} {...others} />);
}

export default Component;
