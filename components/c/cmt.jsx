import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dsg8etb0g.css';
import '../../css/h/h-o8cwh1v.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="dsg8etb0g"/><path class="h-o8cwh1v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:cmt"} {...others} />);
}

export default Component;
