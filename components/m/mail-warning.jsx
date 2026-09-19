import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kmdvi70wk.css';
import '../../css/w/ws3llgtst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kmdvi70wk"/><path class="ws3llgtst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-warning"} {...others} />);
}

export default Component;
