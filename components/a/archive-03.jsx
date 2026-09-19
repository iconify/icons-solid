import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vgo9wxbsq.css';
import '../../css/q/q901sdz5y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vgo9wxbsq"/><path class="q901sdz5y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:archive-03"} {...others} />);
}

export default Component;
