import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/utgpl5beo.css';
import '../../css/h/h36a2vjzh.css';
import '../../css/p/ps2elvbds.css';
import '../../css/z/z6e36cz-m.css';
import '../../css/w/wva01ilaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="utgpl5beo"/><path class="h36a2vjzh"/><path class="ps2elvbds"/><rect class="z6e36cz-m"/><path class="wva01ilaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"evicons:dealer-charging"} {...others} />);
}

export default Component;
