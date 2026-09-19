import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/x3ws29m4m.css';
import '../../css/c/ctyqw7bqu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="x3ws29m4m"/><path class="ctyqw7bqu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-locked"} {...others} />);
}

export default Component;
