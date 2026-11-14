import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lb80ue3yq.css';
import '../../css/g/gu4z1qygw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lb80ue3yq"/><path class="gu4z1qygw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:union-horizontal-circle"} {...others} />);
}

export default Component;
