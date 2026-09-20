import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/eh9gfvmjh.css';
import '../../css/o/oe8fzz4iy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="eh9gfvmjh"/><path class="oe8fzz4iy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-check-round"} {...others} />);
}

export default Component;
