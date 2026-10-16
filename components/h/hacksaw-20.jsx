import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7xjbxbqp.css';
import '../../css/m/mi71ysxct.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i7xjbxbqp"/><path class="mi71ysxct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hacksaw-20"} {...others} />);
}

export default Component;
