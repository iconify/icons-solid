import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/d/dqadebc-s.css';
import '../../css/d/dzw_0_kuo.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><circle class="dqadebc-s"/><path class="dzw_0_kuo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:location-stroke-16"} {...others} />);
}

export default Component;
