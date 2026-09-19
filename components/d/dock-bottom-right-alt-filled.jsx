import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1q1bljxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t1q1bljxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dock-bottom-right-alt-filled"} {...others} />);
}

export default Component;
