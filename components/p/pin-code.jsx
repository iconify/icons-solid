import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/becg_5w7n.css';
import '../../css/d/dvht4yutc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="becg_5w7n"/><path class="dvht4yutc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:pin-code"} {...others} />);
}

export default Component;
