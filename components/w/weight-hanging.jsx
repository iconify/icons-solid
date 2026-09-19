import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ow9_qhf_s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ow9_qhf_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:weight-hanging"} {...others} />);
}

export default Component;
