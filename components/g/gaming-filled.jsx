import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j65vee0iz.css';
import '../../css/q/qux_2305e.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="j65vee0iz"/><path class="qux_2305e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:gaming-filled"} {...others} />);
}

export default Component;
