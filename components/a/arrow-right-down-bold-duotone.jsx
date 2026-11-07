import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl1y521md.css';
import '../../css/l/lqz0ivbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zl1y521md"/><path class="lqz0ivbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-right-down-bold-duotone"} {...others} />);
}

export default Component;
