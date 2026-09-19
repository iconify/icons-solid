import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/y7yss0boz.css';
import '../../css/a/a4seoe1_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="y7yss0boz"/><path class="a4seoe1_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-incoming-01"} {...others} />);
}

export default Component;
