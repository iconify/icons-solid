import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t170-qrdh.css';
import '../../css/u/uto33fc8y.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="t170-qrdh"/><path class="uto33fc8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:at-sign-20"} {...others} />);
}

export default Component;
