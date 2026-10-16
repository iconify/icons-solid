import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzvlv_b9a.css';
import '../../css/y/yrnfbubdf.css';
import '../../css/l/lsfkntbhg.css';
import '../../css/h/h42_f1zpn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="nzvlv_b9a"/><path class="yrnfbubdf"/><path class="lsfkntbhg"/><path class="h42_f1zpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:church-20-bold"} {...others} />);
}

export default Component;
