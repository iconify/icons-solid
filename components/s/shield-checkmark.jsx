import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/awc_62x-y.css';
import '../../css/p/pm3x4tbgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="awc_62x-y"/><path class="pm3x4tbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:shield-checkmark"} {...others} />);
}

export default Component;
