import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tjqshdbtp.css';
import '../../css/c/cwd4cqb-x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="tjqshdbtp"/><path class="cwd4cqb-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:user-check"} {...others} />);
}

export default Component;
