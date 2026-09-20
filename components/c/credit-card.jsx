import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ara2-9bfu.css';
import '../../css/l/lqjniiwse.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="bi12bsetm"><path class="ara2-9bfu"/><path class="lqjniiwse"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:credit-card"} {...others} />);
}

export default Component;
