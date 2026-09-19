import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tpkegzb2d.css';
import '../../css/q/qwj7qphyr.css';
import '../../css/u/uefrb7b_q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tpkegzb2d"/><path class="qwj7qphyr"/><path class="uefrb7b_q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cargo-ship"} {...others} />);
}

export default Component;
