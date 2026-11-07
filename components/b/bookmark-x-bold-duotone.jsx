import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy2y5qfqd.css';
import '../../css/z/zxk5nz2lh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qy2y5qfqd"/><path class="zxk5nz2lh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-x-bold-duotone"} {...others} />);
}

export default Component;
