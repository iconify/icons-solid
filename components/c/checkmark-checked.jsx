import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qst5700gr.css';
import '../../css/b/bcbzygbff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><rect class="qst5700gr"/><path class="bcbzygbff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:checkmark-checked"} {...others} />);
}

export default Component;
