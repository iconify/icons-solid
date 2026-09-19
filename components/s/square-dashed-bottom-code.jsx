import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bf7po7_qs.css';
import '../../css/e/ey4tdb-pv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bf7po7_qs"/><path class="ey4tdb-pv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:square-dashed-bottom-code"} {...others} />);
}

export default Component;
