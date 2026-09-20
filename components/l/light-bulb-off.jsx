import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yeyzig76z.css';
import '../../css/y/yb1m2ub0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yeyzig76z"/><path class="yb1m2ub0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:light-bulb-off"} {...others} />);
}

export default Component;
