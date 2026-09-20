import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ek_0oyb1o.css';
import '../../css/j/jxyaplgzs.css';

const viewBox = {"width":21,"height":21};
const content = `<g transform="translate(5 3)" class="bi12bsetm"><path class="ek_0oyb1o"/><circle class="jxyaplgzs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:iphone-portrait"} {...others} />);
}

export default Component;
