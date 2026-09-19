import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/re8cb0fzc.css';
import '../../css/q/qnnfivztg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="re8cb0fzc"/><path class="qnnfivztg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:tent"} {...others} />);
}

export default Component;
