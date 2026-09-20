import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/b75n16h0k.css';
import '../../css/l/lb9mvccia.css';
import '../../css/t/t98381bax.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="b75n16h0k"/><path class="lb9mvccia"/><path class="t98381bax"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:message"} {...others} />);
}

export default Component;
