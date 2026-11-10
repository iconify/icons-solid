import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g5jz-8juq.css';
import '../../css/v/vk97tacgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="g5jz-8juq"/><path class="vk97tacgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:theta"} {...others} />);
}

export default Component;
