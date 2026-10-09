import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d4d9q7zmc.css';
import '../../css/z/zto9ilb4m.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d4d9q7zmc"/><path class="zto9ilb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:oil-20"} {...others} />);
}

export default Component;
