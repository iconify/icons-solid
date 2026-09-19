import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/j3en9kcin.css';
import '../../css/e/etuznobyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="j3en9kcin"/><path class="etuznobyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:perplexity-ai"} {...others} />);
}

export default Component;
