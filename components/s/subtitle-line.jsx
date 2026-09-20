import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1o33v6nh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z1o33v6nh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:subtitle-line"} {...others} />);
}

export default Component;
