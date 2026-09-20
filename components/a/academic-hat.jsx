import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/k/k9yvr5svp.css';
import '../../css/z/zhqm21bqp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="k9yvr5svp"/><path class="zhqm21bqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:academic-hat"} {...others} />);
}

export default Component;
