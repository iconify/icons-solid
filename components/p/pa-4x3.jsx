import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5vgbcb_s.css';
import '../../css/h/ha1017w6s.css';
import '../../css/v/v5ypc0jqx.css';
import '../../css/k/ksbkozbzk.css';
import '../../css/t/tj21xnbse.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="y5vgbcb_s"/><path class="ha1017w6s"/><path class="v5ypc0jqx"/><path class="ksbkozbzk"/><path class="tj21xnbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:pa-4x3"} {...others} />);
}

export default Component;
