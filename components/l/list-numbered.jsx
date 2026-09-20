import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/divd5xbon.css';
import '../../css/q/qhldybb2c.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="divd5xbon"/><path class="qhldybb2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:list-numbered"} {...others} />);
}

export default Component;
