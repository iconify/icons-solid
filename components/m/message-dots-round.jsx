import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eh9gfvmjh.css';
import '../../css/z/z6swwab2d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eh9gfvmjh"/><path class="z6swwab2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-dots-round"} {...others} />);
}

export default Component;
