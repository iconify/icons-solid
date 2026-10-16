import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rsbhltb8q.css';
import '../../css/u/ui1gjq2vy.css';
import '../../css/i/ieprg1yds.css';
import '../../css/t/tv5dm7bgg.css';
import '../../css/i/iy2ea7b5x.css';
import '../../css/x/xmf3m1b7p.css';
import '../../css/i/i1od1d0bu.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rsbhltb8q"/><path class="ui1gjq2vy"/><path class="ieprg1yds"/><path class="tv5dm7bgg"/><path class="iy2ea7b5x"/><path class="xmf3m1b7p"/><path class="i1od1d0bu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mangrove-20"} {...others} />);
}

export default Component;
