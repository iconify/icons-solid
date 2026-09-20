import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/onk8mrkqg.css';
import '../../css/a/az5a16bac.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="onk8mrkqg"/><path class="az5a16bac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-up-line-duotone"} {...others} />);
}

export default Component;
