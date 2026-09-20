import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q73cn2d1k.css';
import '../../css/q/qleex8blj.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="q73cn2d1k"/><path class="qleex8blj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:side-menu"} {...others} />);
}

export default Component;
