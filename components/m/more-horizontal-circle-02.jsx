import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xry_5bcjr.css';
import '../../css/j/jeoamabzd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xry_5bcjr"/><path class="jeoamabzd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:more-horizontal-circle-02"} {...others} />);
}

export default Component;
