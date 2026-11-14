import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cqjiytbcf.css';
import '../../css/k/k0ydwtsuz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cqjiytbcf"/><path class="k0ydwtsuz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-translate"} {...others} />);
}

export default Component;
