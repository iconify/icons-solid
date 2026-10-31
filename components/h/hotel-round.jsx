import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpm7dvn9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpm7dvn9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:hotel-round"} {...others} />);
}

export default Component;
