import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qxe6-zbrf.css';
import '../../css/e/ebyk6d86k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="qxe6-zbrf"/><path class="ebyk6d86k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:add-money-circle"} {...others} />);
}

export default Component;
