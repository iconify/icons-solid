import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxhoadckv.css';
import '../../css/d/dwlr4pzjv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yxhoadckv"/><path class="dwlr4pzjv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:home-secure"} {...others} />);
}

export default Component;
