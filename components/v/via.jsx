import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/e6ot97bre.css';
import '../../css/y/yuyh33ico.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="e6ot97bre"/><path class="yuyh33ico"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:via"} {...others} />);
}

export default Component;
