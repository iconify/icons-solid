import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/w5h7ldmyk.css';
import '../../css/h/hr77xby-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="w5h7ldmyk"/><path class="hr77xby-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:git-pull-request"} {...others} />);
}

export default Component;
