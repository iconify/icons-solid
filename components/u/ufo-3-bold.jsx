import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2a7jyorm.css';
import '../../css/r/r5df1_1cl.css';
import '../../css/m/mpmodohnh.css';
import '../../css/g/g5x0rrl9m.css';
import '../../css/n/nx5s7dbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e2a7jyorm"/><path class="r5df1_1cl"/><path class="mpmodohnh"/><path class="g5x0rrl9m"/><path class="nx5s7dbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ufo-3-bold"} {...others} />);
}

export default Component;
