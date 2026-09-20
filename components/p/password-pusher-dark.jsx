import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jklz1kt1b.css';
import '../../css/a/awbaqxbwl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jklz1kt1b"/><path class="awbaqxbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:password-pusher-dark"} {...others} />);
}

export default Component;
