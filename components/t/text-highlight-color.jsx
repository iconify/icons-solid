import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qst5700gr.css';
import '../../css/m/ma8o52b6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="qst5700gr"/><path class="ma8o52b6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-highlight-color"} {...others} />);
}

export default Component;
