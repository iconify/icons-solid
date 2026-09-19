import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kmmfarjhc.css';
import '../../css/b/bl7yvn2-e.css';
import '../../css/v/vpo7fxqls.css';
import '../../css/a/aarbjq8mj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kmmfarjhc"/><path class="bl7yvn2-e"/><path class="vpo7fxqls"/><path class="aarbjq8mj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keyframes-multiple-add"} {...others} />);
}

export default Component;
