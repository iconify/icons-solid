import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k7-7cvbcl.css';
import '../../css/w/wxvpnh8xn.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="k7-7cvbcl"/><path class="wxvpnh8xn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:scales"} {...others} />);
}

export default Component;
