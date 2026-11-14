import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/ud1sjcb1v.css';
import '../../css/d/dgeqtdbwg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ud1sjcb1v"/><path class="dgeqtdbwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:star-square"} {...others} />);
}

export default Component;
