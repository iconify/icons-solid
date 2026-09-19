import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q853jbciu.css';
import '../../css/t/tzw1xyb1z.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="q853jbciu"/><path class="tzw1xyb1z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ncash"} {...others} />);
}

export default Component;
