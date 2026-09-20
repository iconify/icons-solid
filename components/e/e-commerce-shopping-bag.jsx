import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/z-arym0ss.css';
import '../../css/y/yfgi51pot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="z-arym0ss"/><path class="yfgi51pot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:e-commerce-shopping-bag"} {...others} />);
}

export default Component;
