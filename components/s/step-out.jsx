import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q53mcbb0u.css';
import '../../css/x/x8uw2sb4i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q53mcbb0u"/><path class="x8uw2sb4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:step-out"} {...others} />);
}

export default Component;
