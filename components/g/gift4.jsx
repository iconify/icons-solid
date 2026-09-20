import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/x/xy7zocbqo.css';
import '../../css/f/fdfv0tb-j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="xy7zocbqo"/><path class="fdfv0tb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gift4"} {...others} />);
}

export default Component;
