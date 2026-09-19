import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/vk-5y_bju.css';
import '../../css/d/d8wq0_o1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="vk-5y_bju"/><path class="d8wq0_o1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:mutation-temperature-change"} {...others} />);
}

export default Component;
