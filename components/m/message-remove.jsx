import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/z/zqaivibei.css';
import '../../css/i/i7saidcla.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="zqaivibei"/><path class="i7saidcla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:message-remove"} {...others} />);
}

export default Component;
