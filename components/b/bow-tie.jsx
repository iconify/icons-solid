import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjige0uwm.css';
import '../../css/n/n054g9rgk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yjige0uwm"/><path class="n054g9rgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bow-tie"} {...others} />);
}

export default Component;
