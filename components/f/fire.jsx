import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/ybtx3i9au.css';
import '../../css/n/nusg7bcai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ybtx3i9au"/><path class="nusg7bcai"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:fire"} {...others} />);
}

export default Component;
