import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sr7o1ig4m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sr7o1ig4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:safe-lock-line"} {...others} />);
}

export default Component;
