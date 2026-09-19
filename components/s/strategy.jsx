import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cewcvmcdv.css';
import '../../css/l/lh-0l8bom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cewcvmcdv"/><path class="lh-0l8bom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:strategy"} {...others} />);
}

export default Component;
