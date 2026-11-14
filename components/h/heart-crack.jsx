import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sb-vcjbkh.css';
import '../../css/i/ia50o0jxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sb-vcjbkh"/><path class="ia50o0jxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:heart-crack"} {...others} />);
}

export default Component;
