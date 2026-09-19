import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvbix7bxx.css';
import '../../css/s/sldl10bkj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvbix7bxx"/><path class="sldl10bkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-down-right-stroke-square-filled"} {...others} />);
}

export default Component;
