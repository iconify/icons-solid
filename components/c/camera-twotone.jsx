import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/as_mpab6z.css';
import '../../css/u/urvffbevi.css';
import '../../css/f/fecmyxaqz.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="as_mpab6z"/><path class="urvffbevi"/><path class="fecmyxaqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:camera-twotone"} {...others} />);
}

export default Component;
