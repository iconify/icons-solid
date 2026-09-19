import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/krxklbc9m.css';
import '../../css/q/qfkxnub4x.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="krxklbc9m"/><path class="qfkxnub4x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:chevrons-up-down"} {...others} />);
}

export default Component;
