import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/odesvlbsr.css';
import '../../css/r/rgmpls4kf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="odesvlbsr"/><path class="rgmpls4kf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fishing-hook"} {...others} />);
}

export default Component;
