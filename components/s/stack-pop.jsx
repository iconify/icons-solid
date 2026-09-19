import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/fl6mz6kqm.css';
import '../../css/l/la8im4b3t.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="fl6mz6kqm"/><path class="la8im4b3t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:stack-pop"} {...others} />);
}

export default Component;
