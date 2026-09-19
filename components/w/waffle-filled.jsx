import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8g612boj.css';
import '../../css/q/qwz7habez.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g8g612boj st0"/><path class="qwz7habez st0"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:waffle-filled"} {...others} />);
}

export default Component;
