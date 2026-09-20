import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3-y7_b1w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x3-y7_b1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:shoko-server-dark"} {...others} />);
}

export default Component;
