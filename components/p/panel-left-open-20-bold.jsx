import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i00v-b3kp.css';
import '../../css/x/xehdjeb4b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i00v-b3kp"/><path class="xehdjeb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:panel-left-open-20-bold"} {...others} />);
}

export default Component;
