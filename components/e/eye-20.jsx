import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y04gfnbxb.css';
import '../../css/t/t170-qrdh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y04gfnbxb"/><path class="t170-qrdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:eye-20"} {...others} />);
}

export default Component;
