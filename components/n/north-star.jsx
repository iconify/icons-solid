import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bhxhq0b2y.css';
import '../../css/v/v2312v13t.css';
import '../../css/a/aw20yf1ie.css';
import '../../css/p/p1usotbcl.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="bhxhq0b2y"/><path class="v2312v13t"/><path class="aw20yf1ie"/><path class="p1usotbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:north-star"} {...others} />);
}

export default Component;
