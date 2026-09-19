import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/kuc9ejy1g.css';
import '../../css/t/t6w3i0bag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="kuc9ejy1g"/><path class="t6w3i0bag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:cube-scan"} {...others} />);
}

export default Component;
