import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q2vkbfbsd.css';
import '../../css/o/ovg88i2gm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q2vkbfbsd"/><path class="ovg88i2gm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-incoming-02"} {...others} />);
}

export default Component;
