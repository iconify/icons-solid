import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/khzz_tbtr.css';
import '../../css/e/epatmhr9b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="khzz_tbtr"/><path class="epatmhr9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:car-05"} {...others} />);
}

export default Component;
