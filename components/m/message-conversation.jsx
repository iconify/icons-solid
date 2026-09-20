import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/t26kuab0a.css';
import '../../css/g/g6d8xrbod.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="t26kuab0a"/><path class="g6d8xrbod"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-conversation"} {...others} />);
}

export default Component;
