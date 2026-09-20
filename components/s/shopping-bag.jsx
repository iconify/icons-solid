import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fu41krctc.css';
import '../../css/r/r1e7ypo1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="fu41krctc"/><path class="r1e7ypo1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:shopping-bag"} {...others} />);
}

export default Component;
