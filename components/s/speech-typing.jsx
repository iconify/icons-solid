import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/p/pknad4usr.css';
import '../../css/z/zdpovwbgv.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="pknad4usr"/><path class="zdpovwbgv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:speech-typing"} {...others} />);
}

export default Component;
