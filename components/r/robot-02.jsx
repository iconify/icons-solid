import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/m/m8-2vl3ci.css';
import '../../css/k/kh86v1ben.css';
import '../../css/t/trc6hlbhq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="m8-2vl3ci"/><circle class="kh86v1ben"/><path class="trc6hlbhq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:robot-02"} {...others} />);
}

export default Component;
