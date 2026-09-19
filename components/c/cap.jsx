import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v3sjnl6kg.css';
import '../../css/e/eh-eqfbvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v3sjnl6kg"/><path class="eh-eqfbvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:cap"} {...others} />);
}

export default Component;
