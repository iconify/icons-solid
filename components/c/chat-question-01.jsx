import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vros0jbdr.css';
import '../../css/u/ul4sdhbvd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vros0jbdr"/><path class="ul4sdhbvd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:chat-question-01"} {...others} />);
}

export default Component;
