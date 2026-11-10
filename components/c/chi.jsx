import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/ybmhqv0gc.css';
import '../../css/c/cgd0m5bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="ybmhqv0gc"/><path class="cgd0m5bmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:chi"} {...others} />);
}

export default Component;
