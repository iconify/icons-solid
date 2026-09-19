import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dx47lccxl.css';
import '../../css/i/i3wcg_a4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dx47lccxl"/><path class="i3wcg_a4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-exchange-03"} {...others} />);
}

export default Component;
