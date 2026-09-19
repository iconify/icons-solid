import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qm6f85b3i.css';
import '../../css/v/v2-ll8zod.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="qm6f85b3i"/><path class="v2-ll8zod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ink"} {...others} />);
}

export default Component;
