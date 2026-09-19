import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rkd7flewn.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="rkd7flewn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:heart-circle-plus"} {...others} />);
}

export default Component;
