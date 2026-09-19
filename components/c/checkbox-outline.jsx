import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_cpnh_xd.css';
import '../../css/h/hqrdqe__q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="d_cpnh_xd"/><rect class="hqrdqe__q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:checkbox-outline"} {...others} />);
}

export default Component;
