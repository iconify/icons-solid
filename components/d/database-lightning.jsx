import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cpupvibhg.css';
import '../../css/w/ww70erpkx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cpupvibhg"/><path class="ww70erpkx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:database-lightning"} {...others} />);
}

export default Component;
