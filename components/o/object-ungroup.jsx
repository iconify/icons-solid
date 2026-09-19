import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2t0rrxjj.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="p2t0rrxjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-regular:object-ungroup"} {...others} />);
}

export default Component;
