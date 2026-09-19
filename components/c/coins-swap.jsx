import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/o-a3h7qqt.css';
import '../../css/h/hxn-ecu2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="o-a3h7qqt"/><path class="hxn-ecu2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:coins-swap"} {...others} />);
}

export default Component;
