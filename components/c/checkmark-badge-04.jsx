import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/itl6pib4d.css';
import '../../css/p/p9gdtybnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="itl6pib4d"/><path class="p9gdtybnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:checkmark-badge-04"} {...others} />);
}

export default Component;
