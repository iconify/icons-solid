import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dwlr4pzjv.css';
import '../../css/a/a2_ly7b_n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dwlr4pzjv"/><path class="a2_ly7b_n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:home-temperature-in"} {...others} />);
}

export default Component;
