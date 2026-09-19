import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hjr2fsbln.css';
import '../../css/r/r1guupl6m.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="hjr2fsbln"/><path class="r1guupl6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:stack-push"} {...others} />);
}

export default Component;
