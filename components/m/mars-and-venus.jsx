import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8_u7rkpb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="t8_u7rkpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:mars-and-venus"} {...others} />);
}

export default Component;
