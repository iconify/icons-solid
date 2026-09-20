import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p_ffe-b_n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p_ffe-b_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:unlike"} {...others} />);
}

export default Component;
