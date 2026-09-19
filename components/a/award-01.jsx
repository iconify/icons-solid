import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d2uj54b6n.css';
import '../../css/r/rkyv0zbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d2uj54b6n"/><path class="rkyv0zbjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:award-01"} {...others} />);
}

export default Component;
