import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b3qpupbuo.css';
import '../../css/d/d-9ugsbrb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="b3qpupbuo"/><path class="d-9ugsbrb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:itc"} {...others} />);
}

export default Component;
