import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox1ezpyhc.css';
import '../../css/k/kt7s3r6xk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ox1ezpyhc"/><path class="kt7s3r6xk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:tool-twotone"} {...others} />);
}

export default Component;
