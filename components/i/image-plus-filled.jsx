import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-b_-kbhg.css';
import '../../css/g/gsd-3zbqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g-b_-kbhg"/><path class="gsd-3zbqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:image-plus-filled"} {...others} />);
}

export default Component;
