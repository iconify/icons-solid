import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/ciqv12bmg.css';
import '../../css/e/ef1rc2jqc.css';
import '../../css/n/ns-gq3fvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ciqv12bmg"/><path class="ef1rc2jqc"/><path class="ns-gq3fvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:guest-house"} {...others} />);
}

export default Component;
