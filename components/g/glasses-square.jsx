import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l2alo95cn.css';
import '../../css/h/hkturdord.css';
import '../../css/s/s5hukc19o.css';
import '../../css/w/wezoqwbhz.css';
import '../../css/x/xnplrbc4v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l2alo95cn"/><rect class="hkturdord"/><path class="s5hukc19o"/><rect class="wezoqwbhz"/><path class="xnplrbc4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:glasses-square"} {...others} />);
}

export default Component;
