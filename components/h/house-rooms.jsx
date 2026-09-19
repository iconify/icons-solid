import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dig8a7bjp.css';
import '../../css/s/s675a-bqe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dig8a7bjp"/><path class="s675a-bqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:house-rooms"} {...others} />);
}

export default Component;
